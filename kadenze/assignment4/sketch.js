var collageNumber = 1;
var img;
var bubbleMove1;
var bubbleMove2;
var bubbleMove3;

function preload() {
  fishBg = loadImage("img/fishBg.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bubbleMove1 = height;
  bubbleMove2 = height;
  bubbleMove3 = height;
  noStroke();
}
function draw() {

  if(collageNumber = 1) {
    background(4, 19, 39);
    image(fishBg, width/6, height /8);

    fill(133, 193, 239, 100);
    ellipse(width/2, bubbleMove1, 80, 80);
    fill(255, 150);
    ellipse(width/2+5, bubbleMove1-15, 20, 20);
      if(bubbleMove1 <= windowHeight) {
        bubbleMove1 -=2;
      }
      if(bubbleMove1 <= 0) {
        bubbleMove1 = windowHeight;
    }
    fill(133, 193, 239, 100);
    ellipse(width/3, bubbleMove2, 40, 40);
    fill(255, 150);
    ellipse(width/3+3, bubbleMove2-5, 10, 10);
      if(bubbleMove1 <= windowHeight) {
        bubbleMove2 -=1.5;
      }
      if(bubbleMove2 <= 0) {
        bubbleMove2 = windowHeight;
    }
    fill(133, 193, 239, 100);
    ellipse(width-100, bubbleMove3, 120, 120);
    fill(255, 150);
    ellipse(width-90, bubbleMove3-30, 30, 30);
      if(bubbleMove3 <= windowHeight) {
        bubbleMove3 -=1;
      }
      if(bubbleMove3 <= 0) {
        bubbleMove3 = windowHeight;
    }


  }

}
