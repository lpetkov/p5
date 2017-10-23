var startX = 30;
var stopX = 190;
var startY = 20;
var stopY = 80;
var x = startX;
var y = stopY;
var step = 0.005;
var pct = 0.0;

function setup(){
  createCanvas(400, 600);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}