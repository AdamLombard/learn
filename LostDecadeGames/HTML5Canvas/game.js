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
};
var monster = {
  x: 0,
  y: 0
};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Place monster randomly on screen
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};
