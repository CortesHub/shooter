/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(3);

	__webpack_require__(5);

	init();
	animate();

	console.log(phrase);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	window.requestAnimFrame = function () {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var setEventHandlers = function setEventHandlers() {
		window.addEventListener("keydown", onKeydown, false);
		window.addEventListener("keyup", onKeyup, false);

		window.addEventListener("resize", onResize, false);
	};

	function onKeydown(e) {
		if (localPlayer) {
			keys.onKeyDown(e);
		};
	};

	function onKeyup(e) {
		if (localPlayer) {
			keys.onKeyUp(e);
		};
	};

	function onResize(e) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	function onNewPlayer(data) {
		var newPlayer = new Player(data.x, data.y);
		newPlayer.id = data.id;

		remotePlayers.push(newPlayer);
	};

	function onMovePlayer(data) {
		var movePlayer = playerById(data.id);

		if (!movePlayer) {
			console.log("Player not found: " + data.id);
			return;
		};

		movePlayer.setX(data.x);
		movePlayer.setY(data.y);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = function () {
			function Player(opts) {
					_classCallCheck(this, Player);

					this.x = opts.x;
					this.y = opts.y;
					this.id = opts.id;
					this.moveAmount = opts.moveAmount;
			}

			_createClass(Player, [{
					key: "getX",
					value: function getX() {
							return x;
					}
			}, {
					key: "getY",
					value: function getY() {
							return y;
					}
			}, {
					key: "setX",
					value: function setX(newX) {
							x = newX;
					}
			}, {
					key: "setY",
					value: function setY(newY) {
							y = newY;
					}
			}, {
					key: "update",
					value: function update(keys) {
							var prevX = x,
							    prevY = y;

							if (keys.up) {
									this.y -= moveAmount;
							} else if (keys.down) {
									this.y += moveAmount;
							};

							if (keys.left) {
									this.x -= moveAmount;
							} else if (keys.right) {
									this.x += moveAmount;
							};

							return prevX != this.x || prevY != this.y ? true : false;
					}
			}]);

			return Player;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var phrase = 'It works';

	var canvas, ctx, keys, localPlayer, remotePlayers;

	function init() {
		canvas = document.getElementById("gameCanvas");
		ctx = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		keys = new Keys();

		var startX = Math.round(Math.random() * (canvas.width - 5)),
		    startY = Math.round(Math.random() * (canvas.height - 5));

		localPlayer = new Player(startX, startY);

		setEventHandlers();
	};

	function animate() {
		update();
		draw();

		window.requestAnimFrame(animate);
	};

	function update() {};

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		localPlayer.draw(ctx);

		var i;
		for (i = 0; i < remotePlayers.length; i++) {
			remotePlayers[i].draw(ctx);
		};
	};

/***/ }
/******/ ]);