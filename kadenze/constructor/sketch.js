var bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < random(0, 2); i++) {
        bubbles[i] = new Bubble();
        
    }
}

function draw() {
  background(55);
  
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

}

function Bubble() {
    this.r = random(0, 255),
    this.g = random(0, 255),
    this.b = random(0, 255),
    this.x = random(0, width),
    this.y = random(0, height),
    this.display = function() {
        stroke(255);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, 12, 12);
    },
    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
                
        if(this.x > width-50 || this.x < 50 && this.y > height || this.y < 0) {
            this.r = 255;
            this.g = 255;
            this.b = 255;
        }
    }
}