// Main Class
class Player {

  // constructeur
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.id = opts.id;
    this.moveAmount = opts.moveAmount;
  }

  // Getters and setters
  getX() { return x; }
  getY() { return y; }
  setX(newX) { x = newX; }
  setY(newY) { y = newY; }

  // Update player position
	update(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			this.y -= moveAmount;
		} else if (keys.down) {
			this.y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			this.x -= moveAmount;
		} else if (keys.right) {
			this.x += moveAmount;
		};

		return (prevX != this.x || prevY != this.y) ? true : false;
	};

}
