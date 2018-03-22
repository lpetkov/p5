/*jshint esversion: 6 */ 
//6,2

let bubble;

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    bubble.move();
    bubble.show();
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
}

// function show() {
//     stroke(255);
//     strokeWeight(4);
//     fill(0);
//     ellipse(bubble.x, bubble.y, bubble.d, bubble.d);
// }

// function move() {
//     bubble.x = bubble.x + random(-5, 5);
//     bubble.y = bubble.y + random(-5, 5);
// }