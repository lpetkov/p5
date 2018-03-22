/*jshint esversion: 6 */ 


let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(random(14));
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, 24, 24);
    }
}
