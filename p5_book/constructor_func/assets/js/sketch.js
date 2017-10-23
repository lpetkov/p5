var bubbles = []

function setup() {
  createCanvas(displayWidth, displayHeight);
  /*for (var i = 0; i < 40; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
    
  } */
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function mousePressed() {
  for(var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clicked()) {
      bubbles.splice(i, 1); 
     }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();

    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }

  //if (bubbles.length > 50) {
    //bubbles.splice(0, 1);
  //}

}


