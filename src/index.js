import { graphicsUtils } from "pixi.js";
import "./index.css";
const PIXI = require("pixi.js");
const App = require("./core/App");
const SimpleLine = require("./core/SimpleLine");

const app = new App({
  root: document.body,
  backgroundColor: 0xffffff,
});

let simpleLine = null;

app.view.addEventListener("mousemove", (e) => {
  const { offsetX: x, offsetY: y } = e;
  simpleLine?.next(x, y);
});

app.view.addEventListener("mousedown", (e) => {
  const { offsetX: x, offsetY: y } = e;
  simpleLine = new SimpleLine(x, y);
  app.stage.addChild(simpleLine);
  console.log("mousedown");
});

app.view.addEventListener("touchmove", (e) => {
  const { globalX: x, globalY: y } = e.changedTouches[0];
  simpleLine?.next(x, y);
});

app.view.addEventListener("touchstart", (e) => {
  const { globalX: x, globalY: y } = e.changedTouches[0];
  simpleLine = new SimpleLine(x, y);

  app.stage.addChild(simpleLine);
  console.log("touchstart");
});

const releaseLine = () => simpleLine = null;
window.addEventListener('mouseup', releaseLine );
window.addEventListener('touchend', releaseLine );
