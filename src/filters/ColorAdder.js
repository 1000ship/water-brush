import * as PIXI from 'pixi.js'

function ColorAdder (r, g, b) {
  const fragment = `
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  void main(void)
  {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    if( gl_FragColor.w > 0.5 ) {
      gl_FragColor += vec4(${r},${g},${b},0.0);
    }
  }
  `;
  return new PIXI.Filter(null, fragment);
}

export default ColorAdder;
