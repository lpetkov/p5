var x = 180; // x coord
var y = 400; // y coordinate 
var bodyHeight = 153; //body height
var neckHeight = 56; //neck height
var radius = 45; //head radius
var angle = 0.0; // angle for motion

function setup() {
  createCanvas(360, 480);
  ellipseMode(RADIUS);
  background(204);
}

function draw() {
  background(200);

  //change position by small random amount
  x += random(-4, 4);
  y += random(-1, 1);

  //change height of neck
  neckHeight = 80 + sin(angle) * 30;
  angle += 0.05;

  //Adjust the height of the head
  var ny = y - bodyHeight - neckHeight - radius;

  //Neck
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny);
  line(x+12, y-bodyHeight, x+12, ny);
  line(x+22, y-bodyHeight, x+22, ny);

  //Antenae 

  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);

  //Body 
  noStroke();
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight - 33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);

  //Head
  fill(0);
  ellipse(x+12, ny, radius, radius);
  fill(255);
  ellipse(x+24, ny-6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
}