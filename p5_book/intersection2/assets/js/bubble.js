function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(5, 15);
  this.col = color(40, 40, 40);

  this.changeColor = function() {
    this.col = color(240, 0, 40);
  }

  this.changeColorBack = function() {
    this.col = color(40, 40, 40);
  }

  this.changeSize = function() {
    if (this.r < 25) {
      this.r += 5;
    } else if(this.r >= 25) {
      this.r -= 15;
    }
  }

  this.changeDist = function() {
    this.x += random(-3, 3);
    this.y += random(-3, 3); 
  }

  this.spawn = function() {
    fill(255);
    ellipse(this.x, this.y, this.r/1.5, this.r/1.5);
  }

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.update = function() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

}