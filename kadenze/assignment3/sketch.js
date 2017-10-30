
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

var iris_r = 100;
var eye_r = 250;

function setup() {
  createCanvas(1024, 768);
  background(0);

}

function draw() {
if (!mouseIsPressed) {
  var pupil_r = iris_r / 2;
} else {
  var pupil_r = iris_r / 4; 
}
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
  ellipse(575, 360, 40, 40);

//left eyelid
  fill(0);
  rect(120, 180, 300, 100);

//right eyelid 
  fill(0);
  rect(450, 200, 300, 100);



}

function mousePressed() {
}
