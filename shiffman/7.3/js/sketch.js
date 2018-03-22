/*jshint esversion: 6 */ 
let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    let r = random(4, 24);
    let b = new Bubble(mouseX, mouseY, r);
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
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }

    edge() {
        background(55, 0, 0);
    }

}
