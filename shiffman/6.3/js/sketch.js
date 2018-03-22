/*jshint esversion: 6 */ 


let bubble1;
let bubble2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bubble1 = new Bubble(150, 200, 24);
    bubble2 = new Bubble(400, 200, 20);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();

    if(bubble1.x > windowWidth || bubble2.x > windowWidth) {
        edge();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }

    edge() {
        background(55, 0, 0);
    }

}
