import "./index.css";

const App = require("./core/App");
const SimpleLine = require("./core/SimpleLine");
const EventManager = require('./utils/EventManager')

const app = new App({
  root: document.body,
  backgroundColor: 0xffffff,
});

let simpleLine = null
const onStart = (x, y) => {
  simpleLine = new SimpleLine(x, y)
  app.stage.addChild(simpleLine)
}
const onMove = (x, y) => simpleLine?.next(x, y)
const onEnd = (x, y) => simpleLine = null
const eventManager = new EventManager({app, onStart, onMove, onEnd})
