function setup() {
  createCanvas(200, 200);
  createElement('h1', 'my fav number');
}

function mousePressed() {
  createP("my fav number is "+floor(random(0, 10)));
}

function draw() {
  background(0);
  fill(255, 255, 255);
  rect(100, 100, 50, 50);
}