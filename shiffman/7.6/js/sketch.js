/*jshint esversion: 6 */ 
let bubble1;
let bubble2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bubble1 = new Bubble(200, 200, 50);
    bubble2 = new Bubble(300, 200, 35); 
}

function draw() {
    background(0);


    if (bubble1.intersects(bubble2)) {
        background(200, 0, 100);
    }

    bubble1.show();
    bubble2.show();
    bubble1.move();
    bubble2.move();
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
