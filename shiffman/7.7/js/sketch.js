/*jshint esversion: 6 */ 
bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function draw() {
    background(0);

    // if (bubble1.intersects(bubble2)) {
    //     background(200, 0, 100);
    // }

    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false;
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)) {
                overlapping = true;
            }
        }
    
        if (overlapping) {
            b.changeColor(255);
        } else {
            b.changeColor(0);
        } 
    }
}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other) {

        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    changeColor(bright) {
       this.brightness = bright; 
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        return (d < this.r);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(this.brightness, 120);
        ellipse(this.x, this.y, this.r * 2);
    }
}
