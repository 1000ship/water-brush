import "./index.css";

import * as PIXI from "pixi.js";
import App from "./core/App";
import EventManager from "./utils/EventManager";
import TextDisplay from "./utils/TextDisplay";
import InkOnPaper from "./filters/InkOnPaper";
import SpreadLine from "./core/SpreadLine";
import ColorPicker from "./utils/ColorPicker";
import ColorAdder from "./filters/ColorAdder";

const app = new App({
  root: document.body,
  backgroundColor: 0xffffff,
});
app.stage.filters = [new PIXI.filters.BlurFilter(16, 16), InkOnPaper];

let currentLine = null;
let lines = [];

const textDisplay = new TextDisplay();
const colorPicker = new ColorPicker();
colorPicker.onClear = () => {
  app.stage.removeChildren();
  lines = [];
};
colorPicker.onUndo = () => {
  app.stage.removeChild(lines.pop());
};

const onStart = (x, y) => {
  currentLine = new SpreadLine(x, y);
  const { r, g, b } = colorPicker;
  currentLine.filters = [ColorAdder(r, g, b)];
  lines.push(currentLine);
  app.stage.addChild(currentLine);
};
const onMove = (x, y, { pressure, deltaX, deltaY, pointerType }) => {
  let water =
    pointerType === "touch"
      ? pressure
      : 1 - Math.min(1, Math.sqrt(deltaX ** 2 + deltaY ** 2) / 100);
  currentLine?.next(x, y, { water });
};
const onEnd = (x, y) => (currentLine = null);
const eventManager = new EventManager({ app, onStart, onMove, onEnd });
