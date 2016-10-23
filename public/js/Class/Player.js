/**************************************************
** GAME PLAYER CLASS
**************************************************/
class Player {

  // constructeur
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.id = opts.id;
    this.moveAmount = opts.moveAmount;
  }

  // Getters and setters
  getX() { return this.x; }
  getY() { return this.y; }
  setX(newX) { this.x = newX; }
  setY(newY) { this.y = newY; }

  // Update player position
	update(keys) {
		// Previous position
		let prevX = this.x,
			prevY = this.y;

		// Up key takes priority over down
		if (keys.up) {
			this.y -= this.moveAmount;
		} else if (keys.down) {
			this.y += this.moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			this.x -= this.moveAmount;
		} else if (keys.right) {
			this.x += this.moveAmount;
		};

		return (prevX != this.x || prevY != this.y) ? true : false;
	};

  // Draw player
	draw(ctx) {
		ctx.fillRect(this.x-5, this.y-5, 10, 10);
	};

}


/**************************************************
** EXPORT
**************************************************/
export { Player }
