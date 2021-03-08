const PIXI = require("pixi.js");

class SpreadLine extends PIXI.Graphics {
  constructor(x = 0, y = 0) {
    super();
    this.from(x, y);
  }

  from(x, y) {
    this.points = [{ x, y }];
  }

  next(x, y, {water}) {
    this.points.push({ x, y, width: 4, water: 15 * water });
    if( !!this.animationFrameID ) cancelAnimationFrame( this.animationFrameID )
    this.animationFrameID = requestAnimationFrame(this.draw.bind(this))
  }

  draw() {
    if( !this.animationFrameID ) return
    this.clear();
    if (this.points.length === 0) return;
    this.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 0; i < this.points.length; ++i) {
      
      this.lineTextureStyle({
        width: this.points[i].width,
        texture: PIXI.Texture.from("./assets/black-grunge-wall.jpg"),
        color: 0xffffff,
        alpha: 1,
      });

      this.points[i].width += this.points[i].water * 0.2;
      this.points[i].water *= 0.95;
      this.lineTo(this.points[i].x, this.points[i].y);
    }
    this.animationFrameID = requestAnimationFrame(this.draw.bind(this))
  }
}

module.exports = SpreadLine;
