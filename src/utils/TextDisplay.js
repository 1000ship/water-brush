class TextDisplay {
  constructor () {
    this.textField = document.createElement('div')
    this.textField.style.position = "fixed"
    this.textField.style.left = "8px"
    this.textField.style.top = "8px"
    document.body.appendChild(this.textField)
  }

  setText (text ) {
    this.textField.innerText = text
  }
}

module.exports = TextDisplay
