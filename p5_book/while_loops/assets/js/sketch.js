function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
   background(0); 

   fill(130);

   var weird_sizeX = map(mouseX, 0, displayWidth, 20, 40);
   var weird_sizeY = map(mouseY, 0, displayHeight, 20, 40);

  for (var i = 0; i < displayHeight; i+= 40) {
    for (var x = 0; x < displayWidth; x += 40) {
        ellipse(x, i, weird_sizeX, weird_sizeY);
    }
  }
}
