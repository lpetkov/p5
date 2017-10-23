function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  
  for (var i=0; i < width; i += 100) {
      for(var j = 0; j < height; j += 100) {
          ellipse(i, j, j-50, i-50);
          
      }
  }
}