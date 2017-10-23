function Bubble(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  this.display = function() {
    imageMode(CENTER);
    image(img, this.x, this.y);
    //ellipse(this.x, this.y, 40, 40);
  }

  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
