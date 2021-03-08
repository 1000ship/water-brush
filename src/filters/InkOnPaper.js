const PIXI = require("pixi.js");

const fragment = `
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord);
   if( gl_FragColor.w > 0.3 )
    gl_FragColor.w = 1.0;
   else
    gl_FragColor = vec4(0.0);
}
`;

const InkOnPaper = new PIXI.Filter(null, fragment);
module.exports = InkOnPaper
