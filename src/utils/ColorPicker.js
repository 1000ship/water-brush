class ColorPicker {
  constructor() {
    this.$container = document.createElement('div')
    this.$container.style.position = "fixed";
    this.$container.style.top = "8px";
    this.$container.style.right = "8px";
    this.$container.style.display = "flex"
    this.$container.style.flexDirection = "column"
    this.$colorPicker = document.createElement("input");
    this.$colorPicker.type = "color";
    this.$clearButton = document.createElement("button")
    this.$clearButton.innerText = "All Clear"
    this.$undoButton = document.createElement("button")
    this.$undoButton.innerText = "Undo"


    document.body.appendChild(this.$container);
    this.$container.appendChild(this.$colorPicker);
    this.$container.appendChild(this.$clearButton);
    this.$container.appendChild(this.$undoButton);

    this.setColorByValue("#000000");
    this.$colorPicker.addEventListener("change", (e) => {
      this.setColorByValue(e.target.value);
    });
  }

  set onUndo( func ) {
    this.$undoButton.onclick = func
  }

  set onClear( func ) {
    this.$clearButton.onclick = func
  }

  setColorByValue(value) {
    this.$colorPicker.value = value;
    this.r = parseInt(value.slice(1, 3), 16) / 255;
    this.g = parseInt(value.slice(3, 5), 16) / 255;
    this.b = parseInt(value.slice(5, 7), 16) / 255;
  }
}

module.exports = ColorPicker;
