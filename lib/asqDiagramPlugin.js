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
   * Presenter connection TODO
   */

  restorePresenterForSession: coroutine(function *restorePresenterForSessionGen(session_id, presentation_id){
    console.log('restorePresenterForSession DIAGRAM');
    var questions = yield this.asq.db.getPresentationQuestionsByType(presentation_id, this.tagName);
    var questionIds = questions.map(function(q){
      return q._id;
    });

    // var pipeline = [
    //   { $match: {
    //     "session": session_id,
    //     "question" : {$in : questionIds}
    //   }
    //   },
    //   { $sort:{"submitDate": -1}},
    //   { $group:{
    //     "_id":{
    //       "answeree" : "$answeree",
    //       "question" : "$question"
    //     },
    //     "submitDate":{$first:"$submitDate"},
    //     "submission": {$first:"$submission"},
    //   }
    //   },
    //   { $unwind: "$submission" },
    //   { $project : {  "submitDate":1,
    //     "submission._id" : "$submission._id",
    //     "submission.num" : { $cond : [ "$submission.value", 1, 0 ], },
    //     "submission.otherText" : "$submission.otherText"
    //   }
    //   },
    //   { $group:{
    //     "_id":{
    //       "question" : "$_id.question",
    //       "option_id": "$submission._id"
    //     },
    //     "sum":{$sum : "$submission.num"},
    //     "submitDate" : {$first: "$submitDate"},
    //     "data" : {$push : { $cond : [ {$and : ["$submission.otherText", "$submission.num"]},
    //       {'text' :"$submission.otherText", 'num' : "$submission.num"},
    //       null ]}}
    //   }
    //   },
    //   { $group:{
    //     "_id": {
    //       "question" : "$_id.question",
    //     },
    //     "options":{$push: {"uid" : "$_id.option_id" , "sum": "$sum", "otherData":"$data"}}
    //   }
    //   },
    //   { $project : {
    //     "_id": 0,
    //     "question" : "$_id.question",
    //     "options" : 1
    //   }
    //   }
    // ];
    //
    // var answers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();
    // answers.forEach(function(ans){
    //   ans.options.forEach(function(opt){
    //     opt.otherData = opt.otherData.filter(function(el){
    //       return el !== null;
    //     });
    //     if(opt.otherData.length === 0)
    //       delete opt.otherData;
    //     else{
    //       var otherDict = {};
    //       opt.otherData.forEach(function(d){
    //         otherDict[d.text] = otherDict[d.text] || 0;
    //         otherDict[d.text]++;
    //       });
    //       opt.otherData = otherDict;
    //     }
    //   });
    // }.bind(this));
    //
    // questions.forEach(function(q){
    //   q.uid = q._id.toString();
    //   q.data.options.forEach(function(opt){
    //     opt.uid = opt._id.toString();
    //     delete opt._id;
    //   });
    //   for(var i=0, l=answers.length; i<l; i++){
    //     if(answers[i].question.toString() == q._id){
    //       this.copyAnswers(answers[i], q);
    //       break;
    //     }
    //   }
    // }.bind(this));

    return questions;
  }),

  copyAnswers : function(answer, question){
    for(var i = 0, l = answer.options.length; i<l; i++){
      for(var j = 0, l2 = question.data.options.length; j<l2; j++){
        if(answer.options[i].uid.toString()  == question.data.options[j].uid){
          question.data.options[j].sum = answer.options[i].sum;
          question.data.options[j].uid = question.data.options[j].uid;
          if(answer.options[i].otherData)
            question.data.options[j].otherData = answer.options[i].otherData;
          break;
        }
      }
    }
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


  presenterConnected: coroutine(function *presenterConnectedGen (info){
    console.log("presenterConnected DIAGRAM");

    if(! info.session_id) return info;

    var questionsWithScores = yield this.restorePresenterForSession(info.session_id, info.presentation_id);
    var total = 0;

    // if(questionsWithScores.length){
    //   total = yield this.countAnswers(info.session_id, info.presentation_id);
    // }

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

  /**
   * Viewer connection TODO
   */

  restoreViewerForSession: coroutine(function *restoreViewerForSessionGen(session_id, presentation_id, whitelistId){

    console.log("restoreViewerForSession DIAGRAM");

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
          "options": {$first:"$submission"},
        }
      },
      { $project:{
          "_id": 0,
          "uid" : "$_id",
          "options": 1,
        }
      }
    ];

    var questionsWithAnswers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    questionsWithAnswers.forEach(function(q){
      q.options.forEach(function(opt){
        opt.uid = opt._id.toString();
        delete opt._id
      })
    });

    return questionsWithAnswers;
  }),

  viewerConnected: coroutine(function *viewerConnectedGen (info){

    console.log("viewerConnected DIAGRAM");

    if(! info.session_id) return info;

    var questionsWithAnswers = yield this.restoreViewerForSession(info.session_id, info.presentation_id, info.whitelistId);

    var event = {
      questionType: this.tagName,
      type: 'restoreViewer',
      questions: questionsWithAnswers
    }

    this.asq.socket.emit('asq:question_type', event, info.socketId)

    // this will be the argument to the next hook
    return info;
  }),

  answerSubmission: coroutine(function *answerSubmissionGen (answer){

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

    // this.calculateProgress(answer.session, ObjectId(questionUid));

    //this will be the argument to the next hook
    return answer;
  }),

  calculateProgress: coroutine(function *calculateProgressGen(session_id, question_id){

    console.log("calculateProgress DIAGRAM");

    var pipeline = [
      { $match: {
          "session": session_id,
          "question" : question_id
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
      { $unwind: "$submission" },
      { $project : {  "submitDate":1,
          "submission._id" : "$submission._id",
          "submission.num" : { $cond : [ "$submission.value", 1, 0 ], },
          "submission.otherText" : "$submission.otherText"
        }
      },
      { $group:{
          "_id":{
            "question" : "$_id.question",
            "option_id": "$submission._id"
          },
          "sum":{$sum : "$submission.num"},
          "submitDate" : {$first: "$submitDate"},
          "data" : {$push : { $cond : [ {$and : ["$submission.otherText", "$submission.num"]},
                {'text' :"$submission.otherText", 'num' : "$submission.num"},
                null ]}}
        }
      },
      { $group:{
          "_id": {
            "question" : "$_id.question",
          },
          "options":{$push: {"uid" : "$_id.option_id" , "sum": "$sum", "otherData":"$data"}}
        }
      },
      { $project : {
          "_id": 0,
          "question" : "$_id.question",
          "options" : 1
        }
      }
    ];

    var answers = yield this.asq.db.model('Answer').aggregate(pipeline).exec();

    answers.forEach(function(ans){
      ans.options.forEach(function(opt){
        opt.otherData = opt.otherData.filter(function(el){
          return el !== null;
        });
        if(opt.otherData.length === 0)
          delete opt.otherData;
        else{

          var otherDict = {};
          opt.otherData.forEach(function(d){
            otherDict[d.text] = otherDict[d.text] || 0;
            otherDict[d.text]++;
          });
          opt.otherData = otherDict;
        }
      });
    }.bind(this));

    var pipeline2 = [
      { $match: {
          "session": session_id,
          "question" : question_id
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

    var total = yield this.asq.db.model('Answer').aggregate(pipeline2).exec();

    var count = 0;
    if ( total.length ) {
      total = total[0].count;
    }

    var event = {
      questionType: this.tagName,
      type: 'progress',
      question: answers[0],
      total: total
    };

    this.asq.socket.emitToRoles('asq:question_type', event, session_id.toString(), 'ctrl')
  }),
});