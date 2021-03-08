import * as PIXI from "pixi.js";
import {throttle} from "../utils/throttle";

class App extends PIXI.Application {
  constructor({ root, backgroundColor, ...props }) {
    super({ backgroundColor, ...props });
    root.appendChild(this.view);

    this.fitToScreen = throttle(() => {
      const minimum =
        window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
      this.renderer.resize(minimum, minimum)
    }, 500);

    this.fitToScreen();
    window.addEventListener("resize", this.fitToScreen);
  }

  set onEnterFrame(onEnterFrame) {
    this._onEnterFrame = onEnterFrame;
    window.requestAnimationFrame(this._enterFrameHandler.bind(this));
  }

  get onEnterFrame() {
    return this._onEnterFrame;
  }

  _enterFrameHandler() {
    if (this.onEnterFrame) {
      this.onEnterFrame();
      window.requestAnimationFrame(this._enterFrameHandler.bind(this));
    }
  }
}

export default App
