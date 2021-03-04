const PIXI = require("pixi.js");
const { default: throttle } = require("../utils/throttle");

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const fitToScreen = throttle(() => {
  app.view.width = window.innerWidth;
  app.view.height = window.innerHeight;
}, 500);
fitToScreen();
window.addEventListener("resize", fitToScreen);

module.exports = app
