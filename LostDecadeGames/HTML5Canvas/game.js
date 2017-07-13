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

// Hero image
var heroReady = false;
var heroImage = new Image();

heroImage.onload = function () {
  heroReady = true;
}

heroImage.src = "images/hero.png"

// Monster image
var monsterReady = false;
var monsterImage = new Image();

monsterImage.onload = function() {
  monsterReady = true;
}

monsterImage.src = "images/monster.png"

// Game objects
var hero = {
  speed: 256,
  x: 0,
  y: 0
}
var monster = {
  x: 0,
  y: 0
}
