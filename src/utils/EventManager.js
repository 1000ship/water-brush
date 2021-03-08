class EventManager {
  constructor({ app, onStart = null, onMove = null, onEnd = null }) {
    this.onStart = onStart;
    this.onMove = onMove;
    this.onEnd = onEnd;

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
      this?.onMove(x, y);
    });

    app.view.addEventListener("touchmove", (e) => {
      const { globalX: x, globalY: y } = e.changedTouches[0];
      this?.onMove(x, y);
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
