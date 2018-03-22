x = width / 2;
y = 0;
r = 50;
speed = 5;
frameRate(60);

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
   // fill(random(y, 255), random(y, 25), radnom(y, 255));
    stroke(3);
    stroke(255);
    background(50);
    
    fill(255);
    ellipse(x, y, r, r);

    if(y == 800 || y < 0) {
        speed *= -1;
        console.log(y);
    }
    y += speed;


}