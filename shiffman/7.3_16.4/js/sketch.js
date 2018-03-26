/*jshint esversion: 6 */ 
let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    let red = mouseX;
    let blue = mouseY;
    let r = random(4, 24);
    let b = new Bubble(mouseX, mouseY, r, red, 0, blue);
    bubbles.push(b);
}

function draw() {
    background(0);

    for (let i = 0; i < bubbles.length; i++){
       bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r, col_r, col_g, col_b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.col_r = col_r;
        this.col_g = col_g;
        this.col_b = col_b;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(this.col_r, this.col_g, this.col_b);
        ellipse(this.x, this.y, this.r * 2);
    }

    edge() {
        background(55, 0, 0);
    }

}
