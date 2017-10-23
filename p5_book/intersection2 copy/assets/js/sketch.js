var bubbles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);

}

var r = 30;

function draw() {
  background(20);
  for (var i = 0; i < displayWidth; i++) {
    for(var j = 0; j < displayHeight; j++) {
      fill(200, 20, 0);
      ellipse(i * (r + 40), j * (r + 40), j, jç);
    }
  }
}