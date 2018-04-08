joint.shapes.bpmn = {};

joint.shapes.bpmn.icons = {
  none: "",
  messageOld: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NzkuOTk4LDY0SDMyQzE0LjMyOSw2NCwwLDc4LjMxMiwwLDk2djMyMGMwLDE3LjY4OCwxNC4zMjksMzIsMzIsMzJoNDQ3Ljk5OEM0OTcuNjcxLDQ0OCw1MTIsNDMzLjY4OCw1MTIsNDE2Vjk2ICBDNTEyLDc4LjMxMiw0OTcuNjcxLDY0LDQ3OS45OTgsNjR6IE00MTYsMTI4TDI1NiwyNTZMOTYsMTI4SDQxNnogTTQ0OCwzODRINjRWMTYwbDE5MiwxNjBsMTkyLTE2MFYzODR6Ii8+PC9zdmc+",
  message: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTI4NSA0MDk1IGwtMjUgLTI0IDAgLTE1MjYgMCAtMTUyNiAyNiAtMjQgMjcgLTI1IDIyNTkgMCBjMTUzMCAwDQoyMjY2IDMgMjI3OSAxMCA1MSAyOCA0OSAtNDggNDkgMTU2NSAwIDE2MTMgMiAxNTM3IC00OSAxNTY1IC0xMyA3IC03NDkgMTANCi0yMjgxIDEwIGwtMjI2MSAwIC0yNCAtMjV6IG00MjA1IC0xNjAgYzAgLTEyIC0xODk3IC0xMjY5IC0xOTE1IC0xMjY5IC0xOCAwDQotMTkxNSAxMjU4IC0xOTE1IDEyNjkgMCAzIDg2MiA1IDE5MTUgNSAxMDUzIDAgMTkxNSAtMiAxOTE1IC01eiBtLTI5OTggLTc4Mg0KYzk0OSAtNjMzIDEwNDcgLTY5NiAxMDgzIC02OTYgMzYgMCAxMzggNjUgMTA3NSA2ODkgNTY5IDM4MCAxMDQxIDY5MyAxMDQ4DQo2OTggOSA2IDEyIC0yNjYgMTIgLTEzNDMgbDAgLTEzNTEgLTIxMzIgMiAtMjEzMyAzIC0zIDEzNDggYy0xIDc0MSAwIDEzNDcgMg0KMTM0NyAzIDAgNDc0IC0zMTQgMTA0OCAtNjk3eiIvPjwvZz48L3N2Zz4=",
  messageBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUyNS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIxMCA0MTA1IGwwIC00NSAxMjAwIC04MDAgYzY2MCAtNDQwIDEyMDcgLTgwMCAxMjE1IC04MDAgOCAwIDU1NA0KMzYwIDEyMTUgODAwIGwxMjAwIDgwMCAwIDQ1IDAgNDUgLTI0MTUgMCAtMjQxNSAwIDAgLTQ1eiIvPjxwYXRoIGQ9Ik0yMTAgMjMxNiBsMCAtMTMxNiAyNDE1IDAgMjQxNSAwIDAgMTMxNiBjMCAxMDQ5IC0zIDEzMTQgLTEyIDEzMDgNCi03IC01IC01MzIgLTM1NCAtMTE2NiAtNzc3IC02MzQgLTQyMiAtMTE2NSAtNzcyIC0xMTc4IC03NzcgLTMzIC0xMyAtODYgLTEzDQotMTIwIDAgLTE1IDYgLTU0NiAzNTYgLTExNzggNzc5IC02MzMgNDIyIC0xMTU3IDc3MSAtMTE2MyA3NzUgLTEwIDYgLTEzIC0yNTkNCi0xMyAtMTMwOHoiLz48L2c+PC9zdmc+",
  plus: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTE4NzggNTA4MSBsLTMzIC0yOSAtMyAtODkxIC0yIC04OTEgLTg4MyAwIGMtOTc5IDAgLTkxNCA1IC05NDMgLTY2DQotMjEgLTUxIC0yMSAtMTI0OSAxIC0xMzAwIDI4IC02NyAtMTIgLTY0IDk1NSAtNjQgbDg3MCAwIDAgLTg3MCBjMCAtNzQyIDINCi04NzYgMTUgLTkwNiAyNyAtNjYgMTEgLTY1IDcyMSAtNjIgbDYzNiAzIDI5IDMzIDI5IDMyIDAgODg1IDAgODg1IDg5MSAyIDg5MQ0KMyAyOSAzMyAyOSAzMiAwIDY1MCAwIDY0OSAtMjQgMjggLTI0IDI4IC04OTQgNSAtODkzIDUgLTUgODkzIC01IDg5NCAtMjggMjQNCi0yOCAyNCAtNjQ5IDAgLTY1MCAwIC0zMiAtMjl6IG0xMTkyIC0xMDUyIGMwIC02MjkgMyAtODg3IDExIC05MDIgNiAtMTIgMjENCi0zMCAzMyAtMzkgMjAgLTE2IDgzIC0xOCA5MDkgLTE4IGw4ODcgMCAwIC01MTAgMCAtNTEwIC04OTEgLTIgLTg5MSAtMyAtMjkNCi0zMyAtMjkgLTMyIDAgLTg4NSAwIC04ODUgLTUxMCAwIC01MTAgMCAwIDg3NSBjMCA5NzEgMyA5MjIgLTY1IDk1MSAtMjkgMTINCi0xNzUgMTQgLTkwNSAxNCBsLTg3MCAwIDAgNTEwIDAgNTEwIDg4MCAwIGM2MzYgMCA4ODYgMyA5MDQgMTEgNTggMjcgNTYgLTINCjU2IDk1MyBsMCA4NzYgNTEwIDAgNTEwIDAgMCAtODgxeiIvPjwvZz48L3N2Zz4NCg==",
  plusBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjUsMTRIMTR2OC41YzAsMC4yNzYtMC4yMjQsMC41LTAuNSwwLjVoLTRDOS4yMjQsMjMsOSwyMi43NzYsOSwyMi41VjE0SDAuNSAgQzAuMjI0LDE0LDAsMTMuNzc2LDAsMTMuNXYtNEMwLDkuMjI0LDAuMjI0LDksMC41LDlIOVYwLjVDOSwwLjIyNCw5LjIyNCwwLDkuNSwwaDRDMTMuNzc2LDAsMTQsMC4yMjQsMTQsMC41VjloOC41ICBDMjIuNzc2LDksMjMsOS4yMjQsMjMsOS41djRDMjMsMTMuNzc2LDIyLjc3NiwxNCwyMi41LDE0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
  cross: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTU1MiA0NjU4IGMtMTQ1IC0xNDUgLTI4MyAtMjg3IC0zMDggLTMxNiAtNDkgLTU5IC01NiAtOTkgLTI4IC0xNDINCjkgLTE0IDM4MiAtMzkxIDgyOCAtODM3IGw4MTEgLTgxMyAtODI4IC04MjggLTgyNyAtODI3IDAgLTQ0IDAgLTQ1IDMwMiAtMzAzDQpjMjAzIC0yMDMgMzEzIC0zMDYgMzM0IC0zMTMgMjUgLTkgNDAgLTggNjYgNCAyMCA4IDM1NCAzMzUgODQ4IDgzMCBsODE1IDgxNg0KODIwIC04MjAgYzQ3NiAtNDc1IDgzMiAtODI0IDg0OSAtODMwIDIwIC03IDM4IC03IDYwIDAgMjEgNyAxMzYgMTE0IDMzNCAzMTMNCmwzMDIgMzAzIDAgNDQgMCA0NSAtODI3IDgyNyAtODI4IDgyOCA4MjggODI4IDgyNyA4MjggMCA0OSAwIDQ5IC0zMDggMzA4DQotMzA3IDMwOCAtNDUgMCAtNDUgMCAtODI1IC04MjUgYy00NTQgLTQ1NCAtODMwIC04MjUgLTgzNSAtODI1IC01IDAgLTM4MSAzNzENCi04MzUgODI1IGwtODI1IDgyNSAtNDUgMCAtNDQgMCAtMjY0IC0yNjJ6IG0xOTY4IC0xNjI4IGM4IC01IDMxIC0xMCA1MCAtMTANCjMzIDAgODEgNDYgODY1IDgzMCBsODMwIDgzMCAyMTMgLTIxMyAyMTIgLTIxMiAtODIwIC04MjAgYy01NzUgLTU3NSAtODIzDQotODMwIC04MzEgLTg1MiAtNiAtMTggLTcgLTQzIC00IC01NSA0IC0xMyAzNzkgLTM5NSA4MzMgLTg1MCBsODI1IC04MjYgLTIxMg0KLTIxMyAtMjEzIC0yMTIgLTgyNyA4MjcgLTgyNyA4MjYgLTQ5IDAgLTQ5IDAgLTgyOCAtODI3IC04MjcgLTgyNiAtMjEwIDIxNA0KLTIxMCAyMTQgODI0IDgyNSBjNjQ5IDY0OSA4MjYgODMyIDgzMSA4NTYgNCAyMCAwIDQyIC05IDYwIC05IDE2IC0zODMgMzk2DQotODMxIDg0NCBsLTgxNiA4MTUgMjEyIDIxMiAyMTMgMjEzIDgyMCAtODIwIGM0NTEgLTQ1MiA4MjcgLTgyNSA4MzUgLTgzMHoiLz48L2c+PC9zdmc+",
  crossBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yMi4yNDUsNC4wMTVjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjEzOWwtNi4yNzYsNi4yN2MtMC4zMTMsMC4zMTItMC4zMTMsMC44MjYsMCwxLjE0bDYuMjczLDYuMjcyICBjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjE0bC0yLjI4NSwyLjI3N2MtMC4zMTQsMC4zMTItMC44MjgsMC4zMTItMS4xNDIsMGwtNi4yNzEtNi4yNzFjLTAuMzEzLTAuMzEzLTAuODI4LTAuMzEzLTEuMTQxLDAgIGwtNi4yNzYsNi4yNjdjLTAuMzEzLDAuMzEzLTAuODI4LDAuMzEzLTEuMTQxLDBsLTIuMjgyLTIuMjhjLTAuMzEzLTAuMzEzLTAuMzEzLTAuODI2LDAtMS4xNGw2LjI3OC02LjI2OSAgYzAuMzEzLTAuMzEyLDAuMzEzLTAuODI2LDAtMS4xNEwxLjcwOSw1LjE0N2MtMC4zMTQtMC4zMTMtMC4zMTQtMC44MjcsMC0xLjE0bDIuMjg0LTIuMjc4QzQuMzA4LDEuNDE3LDQuODIxLDEuNDE3LDUuMTM1LDEuNzMgIEwxMS40MDUsOGMwLjMxNCwwLjMxNCwwLjgyOCwwLjMxNCwxLjE0MSwwLjAwMWw2LjI3Ni02LjI2N2MwLjMxMi0wLjMxMiwwLjgyNi0wLjMxMiwxLjE0MSwwTDIyLjI0NSw0LjAxNXoiLz48L3N2Zz4=",
  user: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLDIwLjk5OGgtMWMwLDAtMSwwLTEtMVYxNy41YzAtMC4yNzctMC4yMjQtMC41LTAuNS0wLjVTMTksMTcuMjIzLDE5LDE3LjUgIGwtMC4wMDgsNC4yOTVjMCwwLjYwOS0yLjAxLDIuMjA1LTYuNDkyLDIuMjA1cy02LjQ5Mi0xLjU5Ni02LjQ5Mi0yLjIwNUw2LDE3LjVDNiwxNy4yMjMsNS43NzYsMTcsNS41LDE3UzUsMTcuMjIzLDUsMTcuNXYyLjQ5OCAgYzAsMS0xLDEtMSwxSDNjMCwwLTEsMC0xLTFWMTUuNzVjMC0yLjkyMiwyLjg5Mi01LjQwMSw2LjkzLTYuMzQxYzAsMCwxLjIzNCwxLjEwNywzLjU3LDEuMTA3czMuNTctMS4xMDcsMy41Ny0xLjEwNyAgYzQuMDM4LDAuOTQsNi45MywzLjQxOSw2LjkzLDYuMzQxdjQuMjQ4QzIzLDIwLjk5OCwyMiwyMC45OTgsMjIsMjAuOTk4eiBNMTIuNDc3LDljLTIuNDg1LDAtNC41LTIuMDE1LTQuNS00LjVTOS45OTEsMCwxMi40NzcsMCAgczQuNSwyLjAxNSw0LjUsNC41UzE0Ljk2Miw5LDEyLjQ3Nyw5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
  circle: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIyNjcgNDk5NSBjLTU2NSAtNzEgLTEwNTggLTMxMyAtMTQ1MyAtNzExIC0zNzMgLTM3NSAtNjA0IC04MzYNCi02ODUgLTEzNjkgLTI5IC0xODQgLTMxIC01MDIgLTUgLTY4MCA0MSAtMjg5IDExOSAtNTM1IDI1MSAtNzkzIDM1NiAtNjk5DQoxMDMxIC0xMTgzIDE4MjAgLTEzMDMgMTg1IC0yOSA1MDMgLTMxIDY4MCAtNSA3MTcgMTA0IDEzMjIgNDgxIDE3MTAgMTA2NiAyMjkNCjM0MyAzNTMgNjgzIDQwMSAxMDk1IDIwIDE2NyAxNCA0NzMgLTExIDYzMCAtODYgNTQ0IC0zMjggMTAxNCAtNzE2IDEzOTAgLTM3NQ0KMzY0IC04MjMgNTg4IC0xMzQ0IDY3MCAtMTM5IDIzIC01MDggMjggLTY0OCAxMHogbTYxMyAtNDIwIGM3MjUgLTEyMCAxMzI5DQotNjE0IDE1ODMgLTEyOTUgODggLTIzNSAxMjEgLTQyOSAxMjEgLTcwNSAwIC0yMjQgLTExIC0zMTQgLTYwIC01MTAgLTE3Ng0KLTY5MyAtNzM4IC0xMjU5IC0xNDM1IC0xNDQ0IC0yMDEgLTU0IC0yOTMgLTY1IC01MjkgLTY1IC0yMzYgMCAtMzI4IDExIC01MjkNCjY1IC02OTcgMTg1IC0xMjU5IDc1MSAtMTQzNSAxNDQ0IC00OSAxOTYgLTYwIDI4NiAtNjAgNTEwIDAgMjI0IDExIDMxNCA2MA0KNTEwIDEzNyA1MzkgNTE0IDEwMTQgMTAxNiAxMjgwIDIwMSAxMDYgNDU3IDE4OSA2NjMgMjE0IDUwIDYgMTA0IDEzIDEyMCAxNQ0KNjUgOSAzOTUgLTQgNDg1IC0xOXoiLz48L2c+PC9zdmc+",
  circleBlackWithMargins: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIzNzUgNTAwMCBjLTU4OCAtNDYgLTExNDMgLTI5OCAtMTU0NyAtNzAzIC0zOTMgLTM5MyAtNjM3IC04OTQNCi03MDkgLTE0NTcgLTE2IC0xMjMgLTE2IC00MzcgMCAtNTY1IDEwMiAtODE0IDU4NiAtMTUxMyAxMzA0IC0xODg1IDM2NSAtMTkwDQo3MTAgLTI3MyAxMTI3IC0yNzMgNDEzIDAgNzUyIDgxIDExMTggMjY4IDcyMiAzNjcgMTIwOCAxMDY3IDEzMTMgMTg5MCAxNiAxMjgNCjE2IDQ0MSAwIDU3MCAtNzEgNTU5IC0zMTEgMTA1MiAtNzA2IDE0NTAgLTM3MiAzNzQgLTkwNCA2MzIgLTE0MzUgNjk0IC0xMjYNCjE1IC0zNTEgMjAgLTQ2NSAxMXoiLz48L2c+PC9zdmc+",
  circleBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIyNDYgNTA5NSBjLTc3NiAtMTEwIC0xNDEwIC01MDYgLTE4MjcgLTExNDIgLTE5NCAtMjk2IC0zMzkgLTY4NQ0KLTM5MyAtMTA1NCAtMjQgLTE2MSAtMjIgLTU0NSA0IC03MTEgMTM4IC04OTUgNzA4IC0xNjMwIDE1NDAgLTE5ODYgMzIyIC0xMzgNCjYwNiAtMTkzIDk5NSAtMTkzIDQzOSAwIDc2OSA3OCAxMTUzIDI3MiA3NTAgMzgxIDEyNjAgMTEwMiAxMzc2IDE5NDcgMjAgMTQ1DQoyMSA1MDYgMiA2NTIgLTk1IDcxMiAtNDg5IDEzNjcgLTEwNjEgMTc2NSAtMzIwIDIyMiAtNjcxIDM2NyAtMTA2MCA0MzYgLTE1Ng0KMjggLTU3NCAzNiAtNzI5IDE0eiIvPjwvZz48L3N2Zz4=",
  service: "data:image/png;base64,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",
  eventBased: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIzMTAgNTEwMCBjLTM3NyAtNDUgLTY4OCAtMTQzIC0xMDAwIC0zMTUgLTM1MyAtMTk1IC02OTggLTUyNiAtOTE1DQotODc1IC0yNTEgLTQwNiAtMzg1IC04NzIgLTM4NSAtMTM0MSAwIC04NjUgNDI0IC0xNjU0IDExNDUgLTIxMzQgMzIwIC0yMTMNCjY2OCAtMzQzIDEwNzAgLTQwMSAxNDcgLTIxIDQ4NCAtMjQgNjMwIC02IDY4NSA4OCAxMjgyIDQyMSAxNzA0IDk1MiAyNzYgMzQ3DQo0NTggNzY5IDUyOCAxMjMwIDI1IDE2NCAyNSA1NDAgLTEgNzA1IC04MyA1NDUgLTMyMCAxMDI4IC02OTYgMTQxOCAtMzg4IDQwMw0KLTkwNSA2NjkgLTE0NjUgNzUyIC0xMjggMTkgLTUwMiAyOCAtNjE1IDE1eiBtNTc5IC0yMjUgYzI5OCAtNDMgNjA5IC0xNTMgODc0DQotMzEwIDIwNyAtMTIyIDQ4MSAtMzY1IDYyOSAtNTU1IDI2MiAtMzM5IDQxOCAtNzA1IDQ4NCAtMTEzNSAyMyAtMTUwIDIzIC00NzkNCjAgLTYzMCAtMTE5IC03ODUgLTU5NCAtMTQ0MSAtMTI5MSAtMTc4MCAtMzM1IC0xNjMgLTY1MCAtMjM2IC0xMDI1IC0yMzYgLTM3OQ0KMCAtNjkwIDcyIC0xMDI1IDIzNSAtMzczIDE4MyAtNjg2IDQ1NSAtOTE0IDc5NSAtMzYzIDUzOSAtNDg1IDEyMDYgLTMzNiAxODM2DQoxNjEgNjgyIDYyMCAxMjU3IDEyNTAgMTU2NSAyNjYgMTMwIDUxMSAxOTcgODUwIDIzNCA4MiA5IDM5NCAtMyA1MDQgLTE5eiIvPjxwYXRoIGQ9Ik0yNDIwIDQ3MTQgYy05MDYgLTY3IC0xNjY0IC02NjkgLTE5MjUgLTE1MjkgLTE5OSAtNjU3IC03MiAtMTM3MA0KMzQyIC0xOTIzIDc4IC0xMDMgMjY4IC0yOTggMzczIC0zODIgMzE3IC0yNTIgNzEzIC00MTcgMTEwMiAtNDU5IDEzOSAtMTYgMzg0DQotMTMgNTIzIDQgNzE0IDg5IDEzNDMgNTQwIDE2NjEgMTE5MCAzMjggNjcxIDI4NiAxNDUzIC0xMTEgMjA5NCAtMzI1IDUyNA0KLTkwMiA5MDAgLTE1MTUgOTg2IC0xMTEgMTUgLTM1OCAyNSAtNDUwIDE5eiBtNTI1IC0yNDggYzcxNCAtMTUxIDEyODIgLTY3Ng0KMTQ4MCAtMTM2NiA1MSAtMTc4IDY3IC0yODYgNzIgLTQ5MCA0IC0xNDAgMSAtMjE0IC0xMiAtMzA0IC0xMTIgLTgwNCAtNjg3DQotMTQ0MCAtMTQ4MCAtMTYzNSAtMTUwIC0zNyAtMjM2IC00NiAtNDQ1IC00NiAtMzI5IDAgLTU1MyA1MCAtODM3IDE4NSAtNTU4DQoyNjYgLTk0NiA3NjggLTEwNzQgMTM5MCAtMjEgMTAzIC0yNCAxNDEgLTI0IDM2MCAwIDI4MyAxNCAzNzQgOTAgNjA1IDk3IDI5Ng0KMjM1IDUyMyA0NTQgNzQ5IDMxMSAzMTkgNjk4IDUxNSAxMTQxIDU3NiAzNiA1IDE2NiA3IDI5MCA1IDE5NSAtMyAyNDEgLTcgMzQ1DQotMjl6Ii8+PHBhdGggZD0iTTI1MjQgNDEwNyBjLTUyIC0yMCAtMTQ3NSAtMTA4NyAtMTQ4NSAtMTExNCAtNSAtMTMgLTkgLTM0IC05IC00NSAwDQotMTEgMTE3IC00MDIgMjYxIC04NjcgMjMzIC03NTYgMjY0IC04NDkgMjkwIC04NzMgbDI5IC0yOCA5NTEgMCA5NTEgMCAyNyAyNw0KYzIyIDI0IDY4IDE2MyAyODkgODc4IDE0NCA0NjggMjYyIDg1OSAyNjIgODcwIDAgMTEgLTggMzIgLTE4IDQ3IC05IDE1IC0yNzYNCjIyMCAtNTkyIDQ1NSAtODUxIDYzNCAtODczIDY1MCAtOTAwIDY1NiAtMTQgMyAtMzkgMCAtNTYgLTZ6IG02ODcgLTcxNyBjNDc2DQotMzU1IDY0MyAtNDg1IDY0MSAtNDk4IC0zIC0xNiAtNDEzIC0xMzQ3IC00NDggLTE0NTUgbC0xNiAtNDcgLTgzMCAyIC04MzEgMw0KLTIzMyA3NTUgYy0xMjggNDE1IC0yMzEgNzU3IC0yMjggNzYwIDE4IDE5IDEyODEgOTU4IDEyOTAgOTU5IDYgMSAzMDEgLTIxNQ0KNjU1IC00Nzl6Ii8+PC9nPjwvc3ZnPg0K",
  timer: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIzNTUgNTEwNCBjLTE2IC0yIC03MyAtOSAtMTI1IC0xNSAtNDMzIC00OSAtODY2IC0yMjkgLTEyNDUgLTUxOA0KLTExOCAtODkgLTMyMyAtMjkxIC00MTkgLTQxMSAtNjIwIC03NzcgLTczOCAtMTgzNyAtMzAyIC0yNzI1IDM2NiAtNzQ1IDEwNzANCi0xMjY3IDE4ODYgLTE0MDAgNTU5IC05MCAxMTU0IDE0IDE2NDUgMjg4IDUyMSAyOTEgOTIyIDc0OCAxMTM4IDEyOTcgMTEwIDI4MQ0KMTY0IDU0MyAxNzQgODU2IDkgMjc5IC0yMCA1MjMgLTkxIDc3MiAtMTIzIDQyNSAtMzIxIDc3MCAtNjIwIDEwODAgLTM5NSA0MDgNCi04ODEgNjYxIC0xNDQ2IDc1MyAtMTE5IDE5IC01MTMgMzUgLTU5NSAyM3ogbTUwIC0zMDIgYzE0IC02MCA5NiAtODQgMTQyIC00MA0KMjAgMTkgMjMgMzEgMjMgMTAxIGwwIDgwIDExNyAtNyBjMjMwIC0xMyA0MzUgLTUzIDY1MiAtMTI4IDExMyAtMzkgMjgxIC0xMTINCjI4MSAtMTIyIDAgLTMgLTI3IC01MCAtNjAgLTEwNCAtMzMgLTU1IC02MCAtMTA0IC02MCAtMTA4IDAgLTkgMTQwIC04NyAxNDUNCi04MiAyIDIgMzEgNDkgNjUgMTA2IDM0IDU2IDY1IDEwMiA3MCAxMDIgMTggMCAyMTggLTE0MCAzMTEgLTIxOCAxMjQgLTEwNA0KMjcxIC0yNTkgMzY5IC0zOTEgbDc5IC0xMDUgLTEwOSAtNjAgYy02MCAtMzQgLTExMCAtNjQgLTExMCAtNjkgMCAtMTEgODENCi0xMzcgODkgLTEzNyAzIDAgNTMgMjcgMTEwIDYwIDU3IDMzIDEwNiA2MCAxMDcgNjAgNyAwIDExNSAtMjIxIDE0NCAtMjk0IDM0DQotODYgODMgLTIzNiAxMDQgLTMyMSAxOSAtNzYgNTQgLTI5NCA1OCAtMzYwIGwyIC01MCAtMTEwIC01IGMtMTM0IC02IC0xNDQNCi0xMiAtMTQ0IC04NiAwIC03NiAxNSAtODQgMTUyIC04NCBsMTA4IDAgMCAtNjMgYzAgLTk1IC0yNyAtMzA3IC01NiAtNDM2IC00NA0KLTE5OCAtMTQzIC00NjcgLTIxOSAtNTk3IGwtMjcgLTQ2IC0xOCAzMCBjLTE2IDI2IC0xMjMgOTggLTE3MyAxMTggLTEwIDMgLTI4DQotMTggLTU2IC02NiAtMjQgLTM5IC00MSAtNzMgLTM5IC03NCAxIC0yIDM5IC0yNCA4NCAtNTAgNTYgLTMyIDkyIC00NiAxMTgNCi00NiBsMzcgMCAtNjAgLTg4IGMtMTc0IC0yNTIgLTQwNyAtNDg1IC02NDcgLTY0NSAtNDAgLTI2IC03NSAtNDcgLTc4IC00NyAtNA0KMCAtNCAxMSAwIDI1IDUgMjAgLTUgNDYgLTQxIDEwOCAtMjYgNDUgLTUxIDg2IC01NSA5MSAtNyA3IC0xMzQgLTU2IC0xNDQgLTczDQotNSAtOCA2NiAtMTMzIDkzIC0xNjUgOSAtMTAgMjcgLTIzIDQxIC0yOCAyMyAtMTAgMTQgLTE2IC0xMTQgLTc4IC0yODUgLTEzOQ0KLTYxNSAtMjIyIC05MjEgLTIzMiBsLTkwIC0zIC01IDExNyBjLTMgNjUgLTEwIDEyMiAtMTYgMTI4IC02IDYgLTM2IDEwIC03MCA4DQotNzYgLTQgLTg0IC0xOCAtODQgLTE1MCBsMCAtOTggLTI3IDAgYy0xMTEgMCAtNDE5IDY0IC01ODggMTIyIC0xNjYgNTYgLTQ1NQ0KMTk1IC00NTUgMjE4IDAgNSAyNyA1NCA2MCAxMDggMzMgNTUgNjAgMTAyIDYwIDEwNSAwIDQgLTg4IDY3IC0xMjcgOTAgLTggNQ0KLTM0IC0yOSAtNzUgLTk4IC0zNCAtNTggLTY4IC0xMDUgLTczIC0xMDUgLTE1IDAgLTE4NyAxNDAgLTI2OSAyMTkgLTE0MyAxMzgNCi0zMDEgMzM4IC00MDUgNTEzIGwtMjIgMzcgNjggMzkgYzM3IDIyIDg3IDUwIDExMCA2MyAyNCAxMyA0MiAyNiA0MCAyOSAtMSAzDQotMTggMzUgLTM3IDczIC0xOSAzNyAtMzggNjcgLTQzIDY3IC01IDAgLTUzIC0yNSAtMTA2IC01NSAtNTQgLTMwIC0xMDIgLTU1DQotMTA4IC01NSAtNiAwIC0yOSA0NiAtNTEgMTAzIC03MCAxNzcgLTExNyAzNDAgLTE0NiA1MTIgLTE4IDEwNSAtMzkgMzY1IC0zMQ0KMzc0IDQgMyA2MSAxMSAxMjggMTYgbDEyMiAxMCAzIDg1IDMgODUgLTEyMSAtOCBjLTY3IC01IC0xMjQgLTYgLTEyNyAtMyAtOSA5DQoxNiAxOTggNDMgMzMxIDMxIDE0NiA5NSAzNDQgMTU5IDQ4NSA3MCAxNTYgNTQgMTQ5IDE3MCA4MCA1NSAtMzMgMTA1IC01OSAxMTENCi02MCA2IDAgMzAgMzEgNTIgNzAgbDQwIDY5IC0xMDYgNjIgYy01OSAzNCAtMTA5IDYzIC0xMTEgNjUgLTExIDkgMTQzIDIxMQ0KMjY5IDM1MiAxMTEgMTI0IDQwNyAzNzEgNDI5IDM1OCA0IC0zIDM0IC00OSA2NiAtMTAzIDMyIC01NCA1OSAtMTAwIDYxIC0xMDINCjQgLTUgMTQ0IDc5IDE0NCA4NyAwIDMgLTI4IDUyIC02MiAxMTAgLTUwIDg1IC01OSAxMDYgLTQ3IDExNCAzMiAyMyAyNDEgMTE5DQozMzQgMTUzIDE3MyA2NSA0NDkgMTI2IDYyMCAxMzcgbDQwIDMgMyAtNTUgYzEgLTMwIDQgLTY1IDcgLTc4eiIvPjxwYXRoIGQ9Ik0yODM2IDQ3NDggYy0yNSAtMjIgLTM0IC02NyAtMjEzIC0xMTA3IC0xNzIgLTEwMDAgLTE4NiAtMTA4NiAtMTcyDQotMTExMCA4IC0xNCAyNiAtMzEgMzkgLTM4IDE4IC04IDI0MiAtMTIgODAzIC0xNSBsNzc5IC0zIDI0IDI4IGMzMSAzNiAzMSA4MQ0KMSAxMTEgLTIyIDIyIC0zMiAyMyAtMjIxIDI5IC0xMTAgNCAtNDM1IDcgLTcyMyA3IC00NDAgMCAtNTIzIDIgLTUyMyAxNCAwIDgNCjc3IDQ1NyAxNzAgOTk5IDk0IDU0MiAxNzAgMTAwNCAxNzAgMTAyNiAwIDcyIC04MCAxMDcgLTEzNCA1OXoiLz48L2c+PC9zdmc+",
  error: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTQ4NTMgNDcyNyBjLTEyIC03IC0zMjAgLTQ1MSAtNjg0IC05ODcgLTEwMTMgLTE0OTEgLTEwMzMgLTE1MjENCi0xMDQzIC0xNTIyIC01IDAgLTI5NSA0MzggLTY0MyA5NzMgLTM0OSA1MzYgLTY0NCA5ODUgLTY1NyA5OTggLTI4IDI3IC04NCAzMQ0KLTEyMCA4IC0zMCAtMjAgLTE1OTggLTM2NjkgLTE2MDQgLTM3MzMgLTUgLTU1IDI3IC05MyA4NCAtMTAxIDMzIC00IDQ1IC0xIDY3DQoxOCAxNCAxMyA0MDUgNDY5IDg2NyAxMDE0IDQ2MyA1NDUgODQ0IDk5MSA4NDggOTkyIDQgMSAyOTcgLTM3OSA2NTIgLTg0NCAzNTUNCi00NjUgNjUzIC04NDkgNjYyIC04NTQgMzEgLTE3IDg2IC0xMCAxMTEgMTQgMTggMTUgMTA2IDIyMiAyOTIgNjgyIDE0NyAzNjMNCjUwMyAxMjQyIDc5MiAxOTUzIDQyMiAxMDQzIDUyMyAxMzAwIDUxOCAxMzIzIC0xMyA2MCAtODkgOTYgLTE0MiA2NnogbS0yNDQzDQotMTc4NCBjMzQyIC01MjcgNjM1IC05NzAgNjUxIC05ODUgMzcgLTM1IDg3IC0zNyAxMjMgLTUgMTMgMTIgMjk3IDQyNSA2MzENCjkxNyAzMzQgNDkyIDYxMiA5MDAgNjE3IDkwNSA3IDcgOSA0IDUgLTEwIC0xMyAtNDggLTExMjYgLTI3ODAgLTExMzQgLTI3ODINCi00IC0xIC0yODcgMzYzIC02MjggODA5IC0zNDEgNDQ2IC02MjggODE5IC02MzggODI5IC0yNyAyNSAtNjYgMzIgLTk4IDE4IC0xOQ0KLTcgLTI2OCAtMjkyIC02OTkgLTgwMCAtNTkyIC02OTYgLTcwOCAtODI5IC02ODggLTc5MyAzIDUgMjc5IDY0OSA2MTQgMTQzMg0KMzM1IDc4MiA2MTIgMTQyMiA2MTUgMTQyMiA0IDAgMjg2IC00MzEgNjI5IC05NTd6Ii8+PC9nPjwvc3ZnPg==",
  errorBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTQ5ODMgNDgzMyBjLTEyIC0yIC0zMyAtMTcgLTQ1IC0zMiAtMTMgLTE1IC00MTYgLTYwNiAtODk3IC0xMzE0DQotNDgxIC03MDggLTg3OCAtMTI4NCAtODgyIC0xMjgwIC03IDggLTI3MiA0MTQgLTk2NiAxNDgzIC0xOTUgMzAwIC0zNjcgNTU3DQotMzg0IDU3MyAtMjAgMTkgLTQwIDI3IC02NCAyNyAtMjQgMCAtNDMgLTggLTY0IC0yNyAtMjIgLTIyIC0yMTkgLTQ3MiAtODQ3DQotMTkzOCAtNDQ5IC0xMDUwIC04MTkgLTE5MjIgLTgyMiAtMTkzNiAtNiAtNDAgMjIgLTgzIDY2IC0xMDMgMzYgLTE2IDQyIC0xNw0KNzAgLTIgMTggOSAzODggNDM2IDkxNyAxMDU4IDQ4OCA1NzQgODkwIDEwNDQgODk0IDEwNDUgMyAxIDMwNSAtMzg5IDY3MSAtODY4DQozNjYgLTQ3OSA2NzYgLTg4MCA2ODkgLTg5MCAzMyAtMjcgOTMgLTI1IDEyNCA0IDE0IDEyIDQzIDY3IDY1IDEyMiAzNSA4NiA3NDINCjE4MzIgMTQwNCAzNDY0IDExMCAyNzEgMjAxIDUwNSAyMDEgNTE4IDAgNjMgLTYzIDEwOSAtMTMwIDk2eiIvPjwvZz48L3N2Zz4=",
  signal: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTI1MzQgNTExMyBjLTEyIC0yIC0zMSAtMTQgLTQyIC0yNiAtMjMgLTI2IC0yNDQxIC00MDgwIC0yNDU1IC00MTE4DQotMTMgLTM0IC0yIC03NiAzMCAtMTA1IGwyNiAtMjQgMjQ2NiAwIGMyMjYzIDAgMjQ2OCAxIDI0OTAgMTYgMzIgMjMgNTEgNzEgNDENCjEwNiAtNSAxNSAtNTU5IDk1MSAtMTIzMiAyMDc4IC0xMDQ1IDE3NTIgLTEyMjggMjA1MiAtMTI1NSAyMDY1IC0xNyA4IC0zNSAxNA0KLTQwIDE0IC00IC0xIC0xOCAtNCAtMjkgLTZ6IG0xMTU2IC0yMTg2IGM2MTcgLTEwMzQgMTEyMCAtMTg4MSAxMTE3IC0xODgzIC0yDQotMiAtMTAxNCAtMyAtMjI0OSAtMiBsLTIyNDYgMyAxMTIyIDE4ODIgYzYxNiAxMDM2IDExMjQgMTg4MiAxMTI4IDE4ODAgNCAtMQ0KNTEyIC04NDcgMTEyOCAtMTg4MHoiLz48L2c+PC9zdmc+",
  signalBlack: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTI0OTYgNTA4OCBjLTE4IC0xNyAtMTg3OCAtMzEwMyAtMjQyMyAtNDAyMCAtNzMgLTEyMyAtNzggLTE1MSAtMzQNCi0yMDAgbDI5IC0zMyAyNDg0IDAgYzIwNDggMCAyNDg3IDIgMjUwNiAxMyAyOSAxNyA1NSA3NiA0NiAxMDUgLTEyIDM5IC0yNDU2DQo0MTExIC0yNDgxIDQxMzUgLTE2IDE1IC0zNyAyMiAtNjMgMjIgLTI2IDAgLTQ3IC03IC02NCAtMjJ6Ii8+PC9nPjwvc3ZnPg==",
};

joint.shapes.bpmn.IconInterface = {
  initialize: function () {
    this._parent = (this._parent || this).constructor.__super__, this._parent.initialize.apply(this, arguments), this.listenTo(this, "change:icon", this._onIconChange), this._onIconChange(this, this.get("icon") || "none")
  },
  _onIconChange: function (a, b) {
    var c = joint.shapes.bpmn.icons;
    if (!joint.util.has(c, b))
      throw "BPMN: Unknown icon: " + b;
    a.attr("image/xlink:href", c[b])
  }
};

joint.shapes.bpmn.SubProcessInterface = {
  initialize: function () {
    this._parent = (this._parent || this).constructor.__super__, this._parent.initialize.apply(this, arguments), this.listenTo(this, "change:subProcess", this._onSubProcessChange), this._onSubProcessChange(this, this.get("subProcess") || null)
  },
  _onSubProcessChange: function (a, b) {
    a.attr({
      ".sub-process": {
        visibility: b ? "visible" : "hidden",
        "data-sub-process": b || ""
      }
    })
  }
};

joint.shapes.bpmn.ActivityView = joint.shapes.basic.TextBlockView;

joint.shapes.bpmn.Activity = joint.shapes.basic.TextBlock.extend({
  markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body outer"/><rect class="body inner"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<path class="sub-process"/><image class="icon"/></g>'].join(""),
  defaults: joint.util.deepSupplement({
    size: {
      width: 100,
      height: 100
    },
    type: "bpmn.Activity",
    attrs: {
      rect: {
        rx: 8,
        ry: 8,
        width: 100,
        height: 100
      },
      ".body": {
        fill: "#ffffff",
        stroke: "#000000"
      },
      ".inner": {
        transform: "scale(0.9,0.9) translate(5,5)"
      },
      path: {
        d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
        ref: ".inner",
        "ref-x": .5,
        "ref-dy": -30,
        "x-alignment": "middle",
        stroke: "#000000",
        fill: "transparent"
      },
      image: {
        ref: ".inner",
        "ref-x": 5,
        width: 20,
        height: 20
      }
    },
    activityType: "task",
    subProcess: null
  }, joint.shapes.basic.TextBlock.prototype.defaults),
  initialize: function () {
    joint.shapes.basic.TextBlock.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:activityType", this.onActivityTypeChange), this.listenTo(this, "change:subProcess", this.onSubProcessChange), this.onSubProcessChange(this, this.get("subProcess")), this.onActivityTypeChange(this, this.get("activityType"))
  },
  onActivityTypeChange: function (a, b) {
    switch (b) {
      case "task":
        a.attr({
          ".inner": {
            visibility: "hidden"
          },
          ".outer": {
            "stroke-width": 1,
            "stroke-dasharray": "none"
          },
          path: {
            ref: ".outer"
          },
          image: {
            ref: ".outer"
          }
        });
        break;
      case "transaction":
        a.attr({
          ".inner": {
            visibility: "visible"
          },
          ".outer": {
            "stroke-width": 1,
            "stroke-dasharray": "none"
          },
          path: {
            ref: ".inner"
          },
          image: {
            ref: ".inner"
          }
        });
        break;
      case "event-sub-process":
        a.attr({
          ".inner": {
            visibility: "hidden"
          },
          ".outer": {
            "stroke-width": 1,
            "stroke-dasharray": "1,2"
          },
          path: {
            ref: ".outer"
          },
          image: {
            ref: ".outer"
          }
        });
        break;
      case "call-activity":
        a.attr({
          ".inner": {
            visibility: "hidden"
          },
          ".outer": {
            "stroke-width": 5,
            "stroke-dasharray": "none"
          },
          path: {
            ref: ".outer"
          },
          image: {
            ref: ".outer"
          }
        });
        break;
      default:
        throw "BPMN: Unknown Activity Type: " + b
    }
  },
  onSubProcessChange: function (a, b) {
    b ? a.attr({
      ".fobj div": {
        style: {
          verticalAlign: "baseline",
          paddingTop: 10
        }
      },
      image: {
        "ref-dy": -25,
        "ref-y": ""
      },
      text: {
        "ref-y": 25
      }
    }) : a.attr({
      ".fobj div": {
        style: {
          verticalAlign: "middle",
          paddingTop: 0
        }
      },
      image: {
        "ref-dy": "",
        "ref-y": 5
      },
      text: {
        "ref-y": .5
      }
    })
  }
}).extend(joint.shapes.bpmn.IconInterface).extend(joint.shapes.bpmn.SubProcessInterface);

joint.shapes.bpmn.AnnotationView = joint.shapes.basic.TextBlockView;

joint.shapes.bpmn.Annotation = joint.shapes.basic.TextBlock.extend({
  markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<path class="stroke"/></g>'].join(""),
  defaults: joint.util.deepSupplement({
    size: {
      width: 100,
      height: 100
    },
    type: "bpmn.Annotation",
    attrs: {
      rect: {
        width: 100,
        height: 100
      },
      ".body": {
        "fill-opacity": .1,
        fill: "#ffffff",
        stroke: "none"
      },
      ".fobj div": {
        style: {
          textAlign: "left",
          paddingLeft: 10
        }
      },
      ".stroke": {
        stroke: "#000000",
        fill: "none",
        "stroke-width": 3
      }
    },
    wingLength: 20
  }, joint.shapes.basic.TextBlock.prototype.defaults),
  initialize: function () {
    joint.shapes.basic.TextBlock.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:size", this.onSizeChange), this.onSizeChange(this, this.get("size"))
  },
  onSizeChange: function (a, b) {
    a.attr(".stroke", {
      d: a.getStrokePathData(b.width, b.height, a.get("wingLength"))
    })
  },
  getStrokePathData: function (a, b, c) {
    return c = Math.min(c, a), ["M", c, "0 L 0 0 0", b, c, b].join(" ")
  }
});

joint.shapes.bpmn.Gateway = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/><image/></g></g><text class="label"/>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Gateway",
    size: {
      width: 80,
      height: 80
    },
    attrs: {
      ".body": {
        points: "40,0 80,40 40,80 0,40",
        fill: "#ffffff",
        stroke: "#000000"
      },
      ".label": {
        text: "",
        ref: ".body",
        "ref-x": .5,
        "ref-dy": 20,
        "y-alignment": "middle",
        "x-alignment": "middle",
        "font-size": 14,
        "font-family": "Arial, helvetica, sans-serif",
        fill: "#000000"
      },
      image: {
        width: 40,
        height: 40,
        "xlink:href": "",
        transform: "translate(20,20)"
      }
    }
  }, joint.dia.Element.prototype.defaults)
}).extend(joint.shapes.bpmn.IconInterface);

joint.shapes.bpmn.Event = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><circle class="body outer"/><circle class="body inner"/><image/></g><text class="label"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Event",
    size: {
      width: 60,
      height: 60
    },
    attrs: {
      ".body": {
        fill: "#ffffff",
        stroke: "#000000"
      },
      ".outer": {
        "stroke-width": 1,
        r: 30,
        transform: "translate(30,30)"
      },
      ".inner": {
        "stroke-width": 1,
        r: 26,
        transform: "translate(30,30)"
      },
      image: {
        width: 40,
        height: 40,
        "xlink:href": "",
        transform: "translate(10,10)"
      },
      ".label": {
        text: "",
        fill: "#000000",
        "font-family": "Arial",
        "font-size": 14,
        ref: ".outer",
        "ref-x": .5,
        "ref-dy": 20,
        "x-alignment": "middle",
        "y-alignment": "middle"
      }
    },
    eventType: "start"
  }, joint.dia.Element.prototype.defaults),
  initialize: function () {
    joint.dia.Element.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:eventType", this.onEventTypeChange), this.onEventTypeChange(this, this.get("eventType"))
  },
  onEventTypeChange: function (a, b) {
    switch (b) {
      case "start":
        a.attr({
          ".inner": {
            visibility: "hidden"
          },
          ".outer": {
            "stroke-width": 1
          }
        });
        break;
      case "end":
        a.attr({
          ".inner": {
            visibility: "hidden"
          },
          ".outer": {
            "stroke-width": 5
          }
        });
        break;
      case "intermediate":
        a.attr({
          ".inner": {
            visibility: "visible"
          },
          ".outer": {
            "stroke-width": 1
          }
        });
        break;
      default:
        throw "BPMN: Unknown Event Type: " + b
    }
  }
}).extend(joint.shapes.bpmn.IconInterface);

joint.shapes.bpmn.Pool = joint.dia.Element.extend({
  markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', '<svg overflow="hidden" class="blackbox-wrap"><text class="blackbox-label"/></svg>', '<rect class="header"/><text class="label"/>', '<g class="lanes"/>', "</g>"].join(""),
  laneMarkup: '<g class="lane"><rect class="lane-body"/><rect class="lane-header"/><text class="lane-label"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Pool",
    size: {
      width: 600,
      height: 300
    },
    attrs: {
      ".body": {
        fill: "#ffffff",
        stroke: "#000000",
        width: 500,
        height: 200,
        "pointer-events": "stroke"
      },
      ".header": {
        fill: "#ffffff",
        stroke: "#000000",
        width: 20,
        ref: ".body",
        "ref-height": 1,
        "pointer-events": "visiblePainted"
      },
      ".label": {
        fill: "#000000",
        transform: "rotate(-90)",
        ref: ".header",
        "ref-x": 10,
        "ref-y": .5,
        "font-family": "Arial",
        "font-size": 14,
        "x-alignment": "middle",
        "text-anchor": "middle"
      },
      ".lane-body": {
        fill: "#ffffff",
        stroke: "#000000",
        "pointer-events": "stroke"
      },
      ".lane-header": {
        fill: "#ffffff",
        stroke: "#000000",
        "pointer-events": "visiblePainted"
      },
      ".lane-label": {
        fill: "#000000",
        transform: "rotate(-90)",
        "text-anchor": "middle",
        "font-family": "Arial",
        "font-size": 13
      },
      ".blackbox-wrap": {
        ref: ".body",
        "ref-width": 1,
        "ref-height": 1
      },
      ".blackbox-label": {
        text: "Black Box",
        "text-anchor": "middle",
        transform: "translate(0,-7)"
      },
      ".blackbox-label > tspan": {
        dx: "50%",
        dy: "50%"
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.bpmn.PoolView = joint.dia.ElementView.extend({
  options: {
    headerWidth: 20
  },
  initialize: function () {
    this.listenTo(this.model, "change:lanes", function (a, b) {
      this.renderLanes(b)
    }), joint.dia.ElementView.prototype.initialize.apply(this, arguments)
  },
  update: function () {
    return void 0 === this.lanesAttrs ? this.renderLanes(this.model.get("lanes")) : joint.dia.ElementView.prototype.update.call(this, this.model, joint.util.merge({}, this.model.get("attrs"), this.lanesAttrs || {}))
  },
  renderMarkup: function () {
    joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.$lanes = this.$(".lanes"), this.laneMarkup = V(this.model.laneMarkup)
  },
  renderLanes: function (a) {
    a = a || {}, this.index = 0;
    var b = void 0 === a.headerWidth ? this.options.headerWidth : a.headerWidth;
    this.lanesAttrs = {
      ".header": {
        width: b
      },
      ".label": {
        text: a.label || ""
      }
    }, this.$lanes.empty(), a.sublanes && this.renderSublanes(a.sublanes, b, 0, 1, "lanes"), this.update(this.model, joint.util.merge({}, this.model.get("attrs"), this.lanesAttrs))
  },
  calculateRatios: function (a, b) {
    for (var c = 0, d = [], e = [], f = 0, g = a.length; f < g; f++) {
      var h = a[f],
        i = h.ratio;
      Number.isFinite(i) ? (c += i / 10, e[f] = i / 10 / b) : d.push(f)
    }
    for (var j = Math.max(1 - c, 0) * b / d.length, k = 0, l = d.length; k < l; k++)
      e[d[k]] = j;
    return e
  },
  renderSublanes: function (a, b, c, d, e) {
    var f = this.options.headerWidth,
      g = e + "/sublanes/",
      h = this.calculateRatios(a, d);
    joint.util.toArray(a).reduce(function (a, d, e) {
      var i = "lane" + this.index,
        j = "." + i + " .lane-body",
        k = "." + i + " .lane-header",
        l = "." + i + " .lane-label";
      d.name && (i += " " + d.name);
      var m = g + e,
        n = this.laneMarkup.clone().addClass(i).attr({
          "data-lane-path": m,
          "data-lane-index": this.index
        });
      this.$lanes.append(n.node);
      var o = h[e],
        p = void 0 === d.headerWidth ? f : d.headerWidth,
        q = c + a;
      return this.lanesAttrs[j] = {
        ref: ".body",
        "ref-height": o,
        "ref-width": -b,
        "ref-x": b,
        "ref-y": q
      }, this.lanesAttrs[k] = {
        width: p,
        ref: ".body",
        "ref-height": o,
        "ref-x": b,
        "ref-y": q
      }, this.lanesAttrs[l] = {
        text: d.label,
        ref: k,
        "ref-x": 10,
        "ref-y": .5,
        "x-alignment": "middle"
      }, this.index++, d.sublanes && this.renderSublanes(d.sublanes, b + p, q, o, m), a + o
    }.bind(this), 0)
  }
});

joint.shapes.bpmn.Group = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><rect class="label-rect"/><g class="label-group"><svg overflow="hidden" class="label-wrap"><text class="label"/></svg></g></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Group",
    size: {
      width: 200,
      height: 200
    },
    attrs: {
      ".body": {
        width: 200,
        height: 200,
        stroke: "#000000",
        "stroke-dasharray": "6,6",
        "stroke-width": 2,
        fill: "transparent",
        rx: 15,
        ry: 15,
        "pointer-events": "stroke"
      },
      ".label-rect": {
        ref: ".body",
        "ref-width": .6,
        "ref-x": .4,
        "ref-y": -30,
        height: 25,
        fill: "#ffffff",
        stroke: "#000000"
      },
      ".label-group": {
        ref: ".label-rect",
        "ref-x": 0,
        "ref-y": 0
      },
      ".label-wrap": {
        ref: ".label-rect",
        "ref-width": 1,
        "ref-height": 1
      },
      ".label": {
        text: "",
        x: "50%",
        y: "1.3em",
        "text-anchor": "middle",
        "font-family": "Arial",
        "font-size": 14,
        fill: "#000000"
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.bpmn.DataObject = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.DataObject",
    size: {
      width: 60,
      height: 80
    },
    attrs: {
      ".body": {
        points: "20,0 60,0 60,80 0,80 0,20 20,0 20,20 0,20",
        stroke: "#000000",
        fill: "#ffffff"
      },
      ".label": {
        ref: ".body",
        "ref-x": .5,
        "ref-dy": 5,
        text: "",
        "text-anchor": "middle"
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.bpmn.Conversation = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/><path class="sub-process"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Conversation",
    size: {
      width: 100,
      height: 100
    },
    attrs: {
      ".body": {
        points: "25,0 75,0 100,50 75,100 25,100 0,50",
        stroke: "#000000",
        fill: "#ffffff"
      },
      ".label": {
        text: "",
        ref: ".body",
        "ref-x": .5,
        "ref-dy": 5,
        "text-anchor": "middle"
      },
      path: {
        d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
        ref: ".body",
        "ref-x": .5,
        "ref-dy": -30,
        "x-alignment": "middle",
        fill: "#ffffff",
        stroke: "#000000",
        "fill-opacity": 0
      }
    },
    conversationType: "conversation"
  }, joint.dia.Element.prototype.defaults),
  initialize: function () {
    joint.dia.Element.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:conversationType", this.onConversationTypeChange), this.onConversationTypeChange(this, this.get("conversationType"))
  },
  onConversationTypeChange: function (a, b) {
    switch (b) {
      case "conversation":
        a.attr("polygon/stroke-width", 1);
        break;
      case "call-conversation":
        a.attr("polygon/stroke-width", 4);
        break;
      default:
        throw "BPMN: Unknown Conversation Type: " + b
    }
  }
}).extend(joint.shapes.bpmn.SubProcessInterface);

joint.shapes.bpmn.Choreography = joint.shapes.basic.TextBlock.extend({
  markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<text class="label"/><path class="sub-process"/><g class="participants"/>', "</g>"].join(""),
  participantMarkup: '<g class="participant"><rect class="participant-rect"/><text class="participant-label"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Choreography",
    size: {
      width: 60,
      height: 80
    },
    attrs: {
      rect: {},
      ".body": {
        width: 60,
        height: 80,
        stroke: "#000000",
        fill: "#ffffff"
      },
      ".label": {
        ref: ".body",
        "ref-x": .5,
        "ref-dy": 5,
        text: "",
        "text-anchor": "middle"
      },
      ".participant-rect": {
        stroke: "#000000",
        fill: "#aaaaaa",
        ref: ".body",
        "ref-width": 1
      },
      ".participant-label": {
        "text-anchor": "middle",
        ref: ".participant_0 .participant-rect",
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle"
      },
      ".sub-process": {
        d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
        ref: ".body",
        "ref-x": .5,
        "ref-dy": -30,
        "x-alignment": "middle",
        fill: "transparent",
        stroke: "#000000"
      }
    },
    participants: [],
    initiatingParticipant: 0
  }, joint.shapes.basic.TextBlock.prototype.defaults)
}).extend(joint.shapes.bpmn.SubProcessInterface);

joint.shapes.bpmn.ChoreographyView = joint.shapes.basic.TextBlockView.extend({
  options: {
    participantHeight: 20
  },
  initialize: function () {
    this.listenTo(this.model, "change:participants", function (a, b) {
      this.renderParticipants(b)
    }), this.listenTo(this.model, "change:initiatingParticipant", this.layoutAndUpdate), joint.shapes.basic.TextBlockView.prototype.initialize.apply(this, arguments), joint.env.test("svgforeignobject") || this.stopListening(this.model, "change:content").listenTo(this.model, "change:content", function (a) {
      this.updateContent(a, this.participantsAttrs)
    })
  },
  update: function () {
    return void 0 === this.participantsAttrs ? this.renderParticipants(this.model.get("participants")) : (this.layoutAndUpdate(), this)
  },
  render: function () {
    this.participantsAttrs = void 0, joint.dia.ElementView.prototype.render.apply(this, arguments)
  },
  renderMarkup: function () {
    joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.$participants = this.$(".participants"), this.participantMarkup = V(this.model.participantMarkup)
  },
  renderParticipants: function (a) {
    this.$participants.empty(), this.participantsAttrs = {}, joint.util.toArray(a).forEach(function (a, b) {
      var c = "participant_" + b,
        d = "." + c;
      this.participantsAttrs[d + " .participant-rect"] = {
        height: this.options.participantHeight
      }, this.participantsAttrs[d + " .participant-label"] = {
        text: a
      }, this.$participants.append(this.participantMarkup.clone().addClass(c).node)
    }, this), this.layoutAndUpdate()
  },
  layoutAndUpdate: function () {
    var a = this.model.get("participants") || [],
      b = a.length,
      c = this.options.participantHeight,
      d = this.model.get("size").height,
      e = Math.max(0, d - c * b),
      f = 0,
      g = this.model.get("initiatingParticipant"),
      h = Math.max(joint.util.isNumber(g) ? Math.abs(g) : a.indexOf(g), 0),
      i = Math.min(h, b - 2);
    joint.util.toArray(a).forEach(function (a, b) {
      var d = ".participant_" + b;
      this.participantsAttrs[d] = {
        transform: "translate(0," + f + ")"
      }, this.participantsAttrs[d + " .participant-rect"].fill = h == b ? this.model.attr(".body/fill") : this.model.attr(".participant-rect/fill"), this.participantsAttrs[d + " .participant-rect"].stroke = h == b ? this.model.attr(".body/stroke") : this.model.attr(".participant-rect/stroke"), f += c + (i == b ? e : 0)
    }, this);
    var j = b < 2 ? 0 : i - b + 1;
    this.participantsAttrs[".sub-process"] = {
      "ref-dy": Math.max(-d, j * c - 30)
    };
    var k = b < 2 ? 0 : i + 1;
    this.participantsAttrs[".fobj div"] = {
      style: {
        height: e,
        paddingTop: c * k
      }
    }, this.participantsAttrs[".content"] = {
      "ref-y": c * k + e / 2
    };
    var l = joint.util.merge({}, this.model.get("attrs"), this.participantsAttrs || {});
    joint.util.unsetByPath(l, "div/html"), joint.shapes.basic.TextBlockView.prototype.update.call(this, this.model, l)
  }
});

joint.shapes.bpmn.Message = joint.dia.Element.extend({
  markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/></g>',
  defaults: joint.util.deepSupplement({
    type: "bpmn.Message",
    size: {
      width: 60,
      height: 40
    },
    attrs: {
      ".body": {
        points: "0,0 60,0 60,40 0,40 0,0 60,0 30,20 0,0",
        stroke: "#000000",
        fill: "#ffffff"
      },
      ".label": {
        ref: ".body",
        "ref-x": .5,
        "ref-dy": 5,
        text: "",
        "text-anchor": "middle"
      }
    }
  }, joint.dia.Element.prototype.defaults)
});

joint.shapes.bpmn.Flow = joint.dia.Link.extend({
  defaults: {
    type: "bpmn.Flow",
    attrs: {
      ".marker-source": {
        d: "M 0 0"
      },
      ".marker-target": {
        d: "M 10 0 L 0 5 L 10 10 z",
        fill: "#000000"
      },
      ".connection": {
        "stroke-dasharray": " ",
        "stroke-width": 1
      },
      ".connection-wrap": {
        style: "",
        onMouseOver: "",
        onMouseOut: ""
      }
    },
    flowType: "normal"
  },
  initialize: function () {
    joint.dia.Link.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:flowType", this.onFlowTypeChange), this.onFlowTypeChange(this, this.get("flowType"))
  },
  onFlowTypeChange: function (a, b) {
    var c;
    switch (b) {
      case "default":
        c = {
          ".marker-source": {
            d: "M 0 5 L 20 5 M 20 0 L 10 10",
            fill: "none"
          }
        };
        break;
      case "conditional":
        c = {
          ".marker-source": {
            d: "M 20 8 L 10 0 L 0 8 L 10 16 z",
            fill: "#FFF"
          }
        };
        break;
      case "normal":
        c = {};
        break;
      case "message":
        c = {
          ".marker-target": {
            fill: "#FFF"
          },
          ".connection": {
            "stroke-dasharray": "4,4"
          }
        };
        break;
      case "association":
        c = {
          ".marker-target": {
            d: "M 0 0"
          },
          ".connection": {
            "stroke-dasharray": "4,4"
          }
        };
        break;
      case "conversation":
        c = {
          ".marker-target": {
            d: "M 0 0"
          },
          ".connection": {
            "stroke-width": "7px"
          },
          ".connection-wrap": {
            style: "stroke: #fff; stroke-width: 5px; opacity: 1;",
            onMouseOver: "var s=this.style;s.stroke='#000';s.strokeWidth=15;s.opacity=.4",
            onMouseOut: "var s=this.style;s.stroke='#fff';s.strokeWidth=5;s.opacity=1"
          }
        };
        break;
      default:
        throw "BPMN: Unknown Flow Type: " + b
    }
    a.attr(joint.util.merge({}, this.defaults.attrs, c))
  }
});