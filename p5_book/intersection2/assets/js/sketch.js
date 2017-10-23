var bubbles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < random(190, 240); i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(20);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j++) {
      if(i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        bubbles[i].changeSize();
        bubbles[j].changeSize();
        bubbles[i].changeDist();
        bubbles[j].changeDist();
        bubbles[i].spawn();
        bubbles[j].spawn();
      } else {
        bubbles[i].changeColorBack();
      }
    }
  }
}