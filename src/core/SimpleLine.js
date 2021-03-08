const PIXI = require("pixi.js");

class SimpleLine extends PIXI.Graphics {
  constructor(x = 0, y = 0) {
    super();
    this.from(x, y)
  }

  from(x, y) {
    this.points = [[x, y]];
  }

  next(x, y) {
    this.points.push([x, y]);
    this.draw();
  }

  draw() {
    this.clear();
    if (this.points.length === 0) return;
    this.lineTextureStyle({
      width: 10,
      texture: PIXI.Texture.from("./assets/black-grunge-wall.jpg"),
      color: 0xffffff,
      alpha: 1,
    });
    this.moveTo(this.points[0][0], this.points[0][1]);
    for (let i = 0; i < this.points.length; ++i)
      this.lineTo(this.points[i][0], this.points[i][1]);
  }
}

module.exports = SimpleLine;
