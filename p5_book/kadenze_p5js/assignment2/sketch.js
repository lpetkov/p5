
// Assignment 2 by Lachezar Petkov
// Visual attern for favorite song (Metallica - My Friend of Misery)

var equalDistance = 60;
var smallElipseSize = equalDistance/5;
var largeEllipseSize = equalDistance/2;
var triangleCounter = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {

    for(var i = equalDistance; i <= windowWidth - equalDistance; i += equalDistance) {
      for (var z = equalDistance; z <= windowHeight - equalDistance; z += equalDistance) {
        noStroke();

        fill(255);
        ellipse(i, z, smallElipseSize , smallElipseSize);

        fill(200, 200, 200, 10);
        ellipse(i, z, largeEllipseSize, largeEllipseSize);

        fill(100, 100, 100, 15);
        rect(i , z , equalDistance - 2, equalDistance - 2);
      }
    }

    for (var k = triangleCounter; k <= windowWidth - triangleCounter; k += triangleCounter) {
      fill (0, 0, 0, 10);
      ellipse(k , k * 0.2 , k * 0.10, k * 0.10);
      fill(255, 255, 255, k / 400);
      triangle(k , k * 0.2 , k / 2  , k - k * 2  , k / 2 , k * 2 );
    }
}
