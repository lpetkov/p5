//5.2 Function parameters

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(50);
    lollipop(250, 250, 55);
    lollipop(550, 420, 250);
}

function lollipop(x, y, d) {
    fill(0, 200, 255);
    rect(x-10, y, 15, 150);

    fill(255, 0, 200);
    ellipse(x, y, d, d); 
}