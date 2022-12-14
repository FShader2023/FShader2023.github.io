var globalObject = null;
var globalCounter = 0;
var globalHLSL = "";

function stop() {
  if(globalObject != null) {
    console.log("Stopping previous render loop.")
    var g = globalObject;
    globalObject = null;
    g.running = false;
    g.gl.clear(g.gl.COLOR_BUFFER_BIT);
  }
}

function startSafe() {
  try {
    document.getElementById("console").value = "";
    start();
  } catch(e) {
    document.getElementById("console").value = e;
  }
}

function start() {
  var vertexShaderSource = "#version 300 es\n"
         + "in vec3 a_position;\n"
         + "\n"
         + "void main(void) {\n"
         + "    gl_Position = vec4(a_position, 1.0);\n"
         + "}\n";
  if (document.getElementById("shader_source").value == "") {
    return;
  }
  var fragmentShaderSource = document.getElementById("shader_source").value;

  var vertices = [
    -1.0,  1.0,
    -1.0, -1.0,
     1.0, -1.0,
     1.0,  1.0
  ];

  var indicies = [
    0, 1, 2,   2, 3, 0
  ];
  
  stop();
  console.log("Start");
  
  // WebGL
  var canvas = document.getElementById("opengl-canvas");
  var gl = null;
  try {
    gl = canvas.getContext("webgl2");
  }
  catch(e) {
  }
  if (!gl) {
    throw "Failed to initialize WebGL.";
  }

  // vertex shader
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    throw "Failed to compile vertex shader.\n" + gl.getShaderInfoLog(vertexShader);
  }

  // fragment shader
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    throw "Failed to compile fragment shader.\n" + gl.getShaderInfoLog(fragmentShader);
  }
  globalHLSL = gl.getExtension('WEBGL_debug_shaders').getTranslatedShaderSource(fragmentShader);

  // shader program
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw "Failed to link shader program.\n" + gl.getProgramInfoLog(shaderProgram);
  }
  gl.useProgram(shaderProgram);
  
  var vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "a_position");
  gl.enableVertexAttribArray(vertexPositionAttribute);

  var verticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var indiciesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiciesBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indicies), gl.STATIC_DRAW);

  trySetUniform2f(gl, shaderProgram, "iResolution", canvas.width, canvas.height);
  trySetUniform1f(gl, shaderProgram, "iTime", 0.0);
  trySetUniform1f(gl, shaderProgram, "iTimeDelta", 0.0);
  trySetUniform4f(gl, shaderProgram, "iMouse", 128.0, 128.0, 0.0, 0.0);
  trySetUniform1i(gl, shaderProgram, "iFrame", 0);
  
  globalObject = { running : true, id : globalCounter, gl : gl };
  globalCounter += 1;

  var globalObjectRef = globalObject;

  gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiciesBuffer);

  var drawFunction = function(now) {

    if(!globalObjectRef.running) return;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(drawFunction);
  };
  
  requestAnimationFrame(drawFunction);

}

function trySetUniform1f(gl, shaderProgram, name, x) {
  var loc = gl.getUniformLocation(shaderProgram, name);
  if (loc != null) {
    gl.uniform1f(loc, x);
  }
}

function trySetUniform1i(gl, shaderProgram, name, x) {
  var loc = gl.getUniformLocation(shaderProgram, name);
  if (loc != null) {
    gl.uniform1i(loc, x);
  }
}

function trySetUniform2f(gl, shaderProgram, name, x, y) {
  var loc = gl.getUniformLocation(shaderProgram, name);
  if (loc != null) {
    gl.uniform2f(loc, x, y);
  }
}

function trySetUniform4f(gl, shaderProgram, name, x, y, z, w) {
  var loc = gl.getUniformLocation(shaderProgram, name);
  if (loc != null) {
    gl.uniform4f(loc, x, y, z, w);
  }
}
