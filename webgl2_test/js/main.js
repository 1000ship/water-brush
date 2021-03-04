const vertexShader = `
#version 300 es
precision highp float;
precision highp int;

void main()
{
    gl_Position = vec4(
      2.f * float(uint(gl_VertexID) % 2u) - 1.f,
      2.f * float(uint(gl_VertexID) / 2u) - 1.f,
      0.0,
      1.0
    );
}`;

const fragmentShader = `
#version 300 es
precision highp float;
precision highp int;

uniform sampler2D diffuse;
uniform vec2 u_imageSize;
out vec4 color;

void main()
{
    color = texture(
      diffuse,
      vec2(gl_FragCoord.x, u_imageSize.y - gl_FragCoord.y) / u_imageSize
    );
}`;

(function () {
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2", { antialias: false });

  canvas.width = Math.min(window.innerWidth, window.innerHeight);
  canvas.height = canvas.width;

  var isWebGL2 = !!gl;
  if (!isWebGL2) {
    alert(
      'WebGL 2 is not available.  See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">How to get a WebGL 2 implementation</a>'
    );
  }

  // -- Init program
  var program = createProgram(gl, vertexShader.trim(), fragmentShader.trim());
  var diffuseLocation = gl.getUniformLocation(program, "diffuse");
  var imageSizeLocation = gl.getUniformLocation(program, "u_imageSize");

  // -- Init VertexArray
  var vertexArray = gl.createVertexArray();

  loadImage("../assets/guitar.jpg", function (image) {
    // -- Init Texture
    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    // -- Render
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.uniform1i(diffuseLocation, 0);
    gl.uniform2f(imageSizeLocation, canvas.width / 2, canvas.height / 2);

    gl.bindVertexArray(vertexArray);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Delete WebGL resources
    gl.deleteTexture(texture);
    gl.deleteProgram(program);
    gl.deleteVertexArray(vertexArray);
  });
})();
