
// Assignment 3 by Lachezar Petkov
/* 
requirements to use:
 2+ conditionals
 mouseX/mouseY
 respond to pmouseX, pmouseY
 respond to mousePressed()
 extreme change in mouse movement (Large or fast mouse movements should trigger a big visual response from your expressive eyes.)
 no errors
 craft in drawing the eyes

*/

var eye_r = 250;
var iris_r = 100;
var pupil_r = iris_r / 2;

function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  fill(255, 255, 255);
  noStroke();
  ellipse(250, 350, eye_r, eye_r);
  ellipse(600, 350, eye_r, eye_r);

  fill(0, 140, 245);
  ellipse(260, 350, iris_r, iris_r);

  fill(0);
  ellipse(260, 350, pupil_r, pupil_r);

  


}

