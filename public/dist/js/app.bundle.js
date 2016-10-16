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

	alert(phrase);

/***/ },
/* 2 */
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