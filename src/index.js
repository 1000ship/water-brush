const PIXI = require("pixi.js");
const app = require("./core/app");

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xde3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();

app.stage.addChild(graphics);

const enterFrame = () => {
  graphics.x += 1
  requestAnimationFrame(enterFrame)
}
requestAnimationFrame(enterFrame)
