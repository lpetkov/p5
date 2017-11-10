
// Assignment 3 by Lachezar Petkov


var iris_r = 100;
var eye_r = 250;

function setup() {
  createCanvas(1024, 768);
  background(0);
} 

function draw() {

var mouse_diff = mouseX - pmouseX;

if (mouse_diff > 240) {
  print("great");
  eye_r += 20;
}

if (!mouseIsPressed) {
  var pupil_r = map(mouseX, 0, 1024, 25, 5);
} else {
  var pupil_r = map(pmouseY, 1024, 0, 5, 15); 
}
var r = map(mouseX, 0, 1024, 30, 50);
var iris_r = map(mouseX, 0, 1024, 90, 110);

  noStroke();
//left eye
  fill(255, 255, 255);
  ellipse(250, 350, eye_r, eye_r);

  if( mouseIsPressed == true) {
    fill(255, 200, 40);
  } else {
    fill(0, 140, 245);
  }
  ellipse(260, 350, iris_r, iris_r);

  fill(0);
  ellipse(260, 350, pupil_r, pupil_r);

  //reflections 
  fill(255, 255, 255, 125);
  ellipse(270, 325, 20, 20);
  fill(255, 255, 255, 90);
  ellipse(225, 360, 40, 40);
  triangle(290, 360, 300, 380, 340, 380);

//right eye
  fill(255);
  ellipse(600, 350, eye_r, eye_r);


  if( mouseIsPressed == true) {
    fill(255, 200, 40);
  } else {
    fill(0, 140, 245);
  }
  ellipse(610, 350, iris_r, iris_r);

  fill(0);
  ellipse(610, 350, pupil_r, pupil_r);

  //reflections
  fill(255, 255, 255, 125);
  ellipse(620, 325, 20, 20);
  fill(255, 255, 255, 90);
  ellipse(575, 360, r, r);
  triangle(630, 360, 645, 380, 680, 380);

//left eyelid
  fill(0);
  rect(120, 180, 300, 100);

//right eyelid 
  fill(0);
  rect(450, 200, 300, 100);

//bottom eyelitds
fill(0);
beginShape();
vertex(20, 380);
vertex(40, 580);
vertex(780, 580);
vertex(780, 400);
endShape(CLOSE);
}

function mousePressed() {
}
