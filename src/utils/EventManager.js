class EventManager {
  constructor({ app, onStart = null, onMove = null, onEnd = null }) {
    this.onStart = onStart;
    this.onMove = onMove;
    this.onEnd = onEnd;

    this._prevX = null;
    this._prevY = null;

    app.view.addEventListener("mousedown", (e) => {
      const { offsetX: x, offsetY: y } = e;
      this?.onStart(x, y);
    });

    app.view.addEventListener("touchstart", (e) => {
      const { globalX: x, globalY: y } = e.changedTouches[0];
      this?.onStart(x, y);
    });

    app.view.addEventListener("mousemove", (e) => {
      const { offsetX: x, offsetY: y } = e;
      this?.onMove(x, y, {pointerType: "mouse", pressure: 0.5, deltaX: x - this._prevX, deltaY: y - this._prevY});
      this._prevX = x; this._prevY = y;
    });

    app.view.addEventListener("touchmove", (e) => {
      const { globalX: x, globalY: y, pointerType, pressure } = e.changedTouches[0];
      this?.onMove(x, y, {pointerType, pressure, deltaX: x - this._prevX, deltaY: y - this._prevY});
      this._prevX = x; this._prevY = y;
    });

    window.addEventListener("mouseup", (e) => {
      const { offsetX: x, offsetY: y } = e;
      this?.onEnd(x, y);
    });
    window.addEventListener("touchend", (e) => {
      const { globalX: x, globalY: y } = e.changedTouches[0];
      this?.onEnd(x, y);
    });
  }
}

module.exports = EventManager;
