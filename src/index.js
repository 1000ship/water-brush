import "./index.css";

const PIXI = require('pixi.js')
const App = require("./core/App");
const SimpleLine = require("./core/SimpleLine");
const EventManager = require('./utils/EventManager')
const TextDisplay = require('./utils/TextDisplay')

import InkOnPaper from "./filters/InkOnPaper";
import SpreadLine from "./core/SpreadLine";

const app = new App({
  root: document.body,
  backgroundColor: 0xffffff,
});
const textDisplay = new TextDisplay()

app.stage.filters =[new PIXI.filters.BlurFilter(16, 16), InkOnPaper]

let line = null
const onStart = (x, y) => {
  line = new SpreadLine(x, y)
  app.stage.addChild(line)
}
const onMove = (x, y, {pressure, deltaX, deltaY, pointerType}) => {
  let water = pointerType === "touch" ? pressure : 1 - Math.min(1,Math.sqrt((deltaX ** 2) + (deltaY ** 2))/100)
  line?.next(x, y, {water})
  textDisplay.setText(water)
}
const onEnd = (x, y) => line = null
const eventManager = new EventManager({app, onStart, onMove, onEnd})
