// Create the canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);


// Background image
var backgroundReady = false;
var backgroundImage = new Image();

backgroundImage.onload = function () {
  backgroundReady = true;
}

backgroundImage.src = "images/background.png"
