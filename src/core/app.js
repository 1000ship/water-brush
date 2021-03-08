const PIXI = require("pixi.js");
const { default: throttle } = require("../utils/throttle");


class App extends PIXI.Application {
  constructor({root, backgroundColor, ...props}) {
    super({ backgroundColor, ...props });
    root.appendChild(this.view);
    
    this.fitToScreen = throttle(() => {
      this.renderer.view.style.width = window.innerWidth;
      this.renderer.view.style.height = window.innerHeight;
    }, 500);
    
    this.fitToScreen();
    window.addEventListener("resize", this.fitToScreen); 

  }
  
  set onEnterFrame ( onEnterFrame ) {
    this._onEnterFrame = onEnterFrame
    window.requestAnimationFrame(this._enterFrameHandler.bind(this))
  }

  get onEnterFrame ( ) {
    return this._onEnterFrame
  }

  _enterFrameHandler () {
    if( this.onEnterFrame ) {
      this.onEnterFrame()
      window.requestAnimationFrame(this._enterFrameHandler.bind(this))
    }
  }
}
  
module.exports = App
