var bubbles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 400; i++) {
    bubbles[i]= {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }  
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}