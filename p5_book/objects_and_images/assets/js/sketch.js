var bubbles = [];
var flowers = [];
var flower;


function preload() {
  for (var i = 0; i < 3; i++) {
    flowers[i] = loadImage('assets/img/flower' + i + '.png');
  }
}

function setup() {
  createCanvas(900, 800);
}

function mousePressed() { 
  var r = floor(random(0, flowers.length));
  var b = new Bubble(mouseX, mouseY, flowers[r]);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

