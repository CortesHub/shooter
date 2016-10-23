let character = 'choupi';

export {character}


/**************************************************
** GAME VARIABLES
**************************************************/
let canvas,			// Canvas DOM element
  ctx,			// Canvas rendering context
  keys,			// Keyboard input
	localPlayer,	// Local player
  remotePlayers;


/**************************************************
** GAME INITIALISATION
**************************************************/
function init() {
	// Declare the canvas and rendering context
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");

  // Maximise the canvas
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// Initialise keyboard controls
	keys = new Keys();

	// Calculate a random start position for the local player
	// The minus 5 (half a player size) stops the player being
	// placed right on the egde of the screen
	let startX = Math.round(Math.random()*(canvas.width-5)),
		startY = Math.round(Math.random()*(canvas.height-5));

	// Initialise the local player
	localPlayer = new Player(startX, startY);

  // Initialise remote players array
  remotePlayers = [];

	// Start listening for events
	setEventHandlers();
};


/**************************************************
** GAME UPDATE
**************************************************/
function update() {
	// Update local player and check for change

};


/**************************************************
** GAME DRAW
**************************************************/
function draw() {
	// Wipe the canvas clean
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the local player
	localPlayer.draw(ctx);

	// Draw the remote players
	for (let i = 0; i < remotePlayers.length; i++) {
		remotePlayers[i].draw(ctx);
	};
};


/**************************************************
** GAME ANIMATION LOOP
**************************************************/
function animate() {
	update();
	draw();
	window.requestAnimFrame(animate);
};
