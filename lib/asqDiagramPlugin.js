var ASQPlugin = require('asq-plugin');
var ObjectId = require("bson-objectid");
var Promise = require('bluebird');
var coroutine = Promise.coroutine;
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var assert = require('assert');
var _ = require('lodash');

module.exports = ASQPlugin.extend({
  tagName : 'asq-diagram-q',

  hooks:{
    "parse_html" : "parseHtml",
    "answer_submission" : "answerSubmission",
    "presenter_connected" : "presenterConnected",
    "viewer_connected" : "viewerConnected"
  },

  /**
   * parse html
   */
  parseHtml: coroutine(function* parseHtmlGen(options){
    var $ = cheerio.load(options.html,  {
      decodeEntities: false,
      lowerCaseAttributeNames:false,
      lowerCaseTags:false,
      recognizeSelfClosing: true
    });
    var dQuestions = [];

    var all = $(this.tagName).toArray();
    for ( var i in all) {
      var el = all[i];
      var question = yield this.processEl($, el);
      dQuestions.push(question);
    }

    options.html = $.root().html();
    //return Promise that resolves with the (maybe modified) html

    return this.asq.db.model("Question").create(dQuestions)
      .then(function(){
        return Promise.resolve(options);
      });
  }),

  processEl: coroutine(function* processElGen($, el){
    var $el = $(el);
    //make sure question has a unique id
    var uid = $el.attr('uid');
    if(uid == undefined || uid.trim() == ''){
      $el.attr('uid', uid = ObjectId().toString() );
    }

    //get stem
    var stem = $el.find('asq-stem');
    if(stem.length){
      stem = stem.eq(0).html();
    }else{
      stem = '';
    }

    var settings = yield this.parseSettings($, el);

    return {
      _id : uid,
      type: this.tagName,
      data: {
        html: $.html($el),
        stem: stem,
      },
      settings: settings
    }
  }),

  parseSettings: coroutine(function* parseSettingsGen($, el) {
    var $el = $(el);
    var attrs = $el.attr();
    var settings = this.asq.api.settings.defaultSettings['question'];

    for ( var i in settings ) {
      if ( attrs.hasOwnProperty(settings[i].key) ) {
        // validation ?
        settings[i].value = attrs[settings[i].key];
      }
      else {
        this.writeSettingAsAttribute($el, settings[i]);
      }
    }

    // settings = yield this.createSettings(settings);
    return settings
  }),

  writeSettingAsAttribute: function($el, setting) {
    // boolean
    $el.attr(setting.key, setting.value);
  },

  /**
   * Presenter
   */

  presenterConnected: coroutine(function *presenterConnectedGen (info){
    console.log("presenterConnected DIAGRAM");

    if(! info.session_id) return info;

    var questionsWithScores = yield this.restorePresenterForSession(info.session_id, info.presentation_id);
    var total = 0;

    if(questionsWithScores.length){
      total = yield this.countAnswers(info.session_id, info.presentation_id);
    }

    var event = {
      questionType: this.tagName,
      type: 'restorePresenter',
      questions: questionsWithScores,
      total:total
    };

    this.asq.socket.emit('asq:question_type', event, info.socketId)

    //this will be the argument to the next hook
    return info;
  }),

  restorePresenterForSession: coroutine(function *restorePresenterForSessionGen(session_id, presentation_id){
    console.log('restorePresenterForSession DIAGRAM');
    var questions = yield this.asq.db.getPresentationQuestionsByType(presentation_id, this.tagName);
    var questionIds = questions.map(function(q){
      return q._id;
    });

    var pipeline = [
      { $match: {
          "session": session_id,
          "question" : {$in : questionIds}
        }
      },
      { $sort:{"submitDate": -1} },
      { $group:{
          "_id":{
            "answeree" : "$answeree",
            "question" : "$question"
          },
          "submitDate":{$first:"$submitDate"},
          "submission": {$first:"$submission"},
        }
      },
      { $group:{
          "_id": { "question" : "$_id.question" },
          "submissions":{$push: {"answeree" : "$_id.answeree" , "diagram": "$submission"}}
        }
      },
      { $project : {
          "_id": 0,
          "question" : "$_id.question",
          "submissions" : 1
        }
      }
    ];
    var answers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    questions.forEach(function(q){
      q.uid = q._id.toString();

      for(var i=0, l=answers.length; i<l; i++){
        if(answers[i].question.toString() == q._id){
          this.copyAnswers(answers[i], q);
          break;
        }
      }
    }.bind(this));

    return questions;
  }),

  copyAnswers : function(answer, question){
    question.data.submissions = answer.submissions;
  },

  countAnswers : coroutine(function *countAnswersGen(session_id, presentation_id){
    var questions = yield this.asq.db.getPresentationQuestionsByType(presentation_id, this.tagName);
    var questionIds = questions.map(function(q){
      return q._id;
    });
    var pipeline = [
      { $match: {
          "session": session_id,
          "question" : {$in : questionIds}
        }
      },
      { $sort:{"submitDate": -1}},
      { $group:{
          "_id":{
            "answeree" : "$answeree",
            "question" : "$question"
          },
          "submitDate":{$first:"$submitDate"},
          "submission": {$first:"$submission"},
        }
      },
      { $group: { _id: null, count: { $sum: 1 } } },
      { $project : {
          "_id": 0,
          "count" : 1
        }
      }
    ]

    var total = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    var count = 0;
    if ( total.length ) {
      count = total[0].count;
    }

    return count;
  }),

  /**
   * Viewer
   */

  restoreViewerForSession: coroutine(function *restoreViewerForSessionGen(session_id, presentation_id, whitelistId){

    var questions = yield this.asq.db.getPresentationQuestionsByType(presentation_id, this.tagName);
    var questionIds = questions.map(function(q){
      return q._id;
    });

    var pipeline = [
      { $match: {
          "session": session_id,
          "answeree" : whitelistId,
          "question" : {$in : questionIds}
        }
      },
      { $sort:{"submitDate": -1}},
      { $group:{
          "_id": "$question",
          "diagram": {$first:"$submission"},
        }
      },
      { $project:{
          "_id": 0,
          "uid" : "$_id",
          "diagram": 1,
        }
      }
    ];

    var questionsWithAnswers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    return questionsWithAnswers;
  }),

  viewerConnected: coroutine(function *viewerConnectedGen (info){

    if(! info.session_id) return info;

    var questionsWithAnswers = yield this.restoreViewerForSession(info.session_id, info.presentation_id, info.whitelistId);

    var event = {
      questionType: this.tagName,
      type: 'restoreViewer',
      questions: questionsWithAnswers,
    }

    this.asq.socket.emit('asq:question_type', event, info.socketId)

    // this will be the argument to the next hook
    return info;
  }),

  /**
   * Submission
   */

  answerSubmission: coroutine(function *answerSubmissionGen (answer){
    console.log('answerSubmission')
    console.log(answer.diagram.relations)

    // make sure answer question exists
    var questionUid = answer.questionUid
    var question = yield this.asq.db.model("Question").findById(questionUid).exec();
    assert(question,
      'Could not find question with id' + questionUid + 'in the database');

    //make sure it's an answer for an asq-diagram-q question
    if(question.type !== this.tagName) {
      return answer;
    }

    assert(_.isObject(answer.diagram),
      'Invalid answer format, answer.diagram should be an object.');

    //persist
    yield this.asq.db.model("Answer").create({
      exercise   : answer.exercise_id,
      question   : questionUid,
      answeree   : answer.answeree,
      session    : answer.session,
      type       : question.type,
      submitDate : Date.now(),
      submission : answer.diagram,
      confidence : answer.confidence
    });

    this.calculateProgress(answer.session, ObjectId(questionUid), ObjectId(answer.answeree));

    //this will be the argument to the next hook
    return answer;
  }),

  calculateProgress: coroutine(function *calculateProgressGen(session_id, question_id, answeree_id){

    console.log("______________________calculateProgress START______________________");
    console.log('- answeree_id: ', answeree_id)

    var pipeline = [
      { $match: {
          "session": session_id,
          "question" : question_id,
          "answeree" : answeree_id
        }
      },
      { $sort:{"submitDate": -1}},
    ];

    var answers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    // console.log('- answers:')
    // console.log(answers)

    var answer = {
      _id : {
        answeree : answers[0].answeree,
        question : answers[0].question
      },
      submission: answers[0].submission
    }
    console.log('- answer:')
    console.log(answer)

    var event = {
      questionType: this.tagName,
      type: 'progress',
      question: answer,
    };

    this.asq.socket.emitToRoles('asq:question_type', event, session_id.toString(), 'ctrl')
    console.log("______________________calculateProgress END______________________");
  }),
});