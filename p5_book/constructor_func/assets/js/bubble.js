function Bubble(x, y) {

  this.iameter = 24;
  var radius = this.diameter / 2; 

  this.lifespan = 255;
  //this.col = color(random(0, 255), random(0, 255), random(0, 255));
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255, this.lifespan);
    fill(255, this.lifespan)
    ellipse(this.x, this.y, this.diameter--, diameter--);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan = this.lifespan - 1;
  }

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < radius) {
      return true;
    } else {
      return false;
  }
}
}
