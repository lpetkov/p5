/*jshint esversion: 6 */ 
let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(1, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }

}

// function mousePressed() {
//     let red = mouseX;
//     let blue = mouseY;
//     let r = random(4, 24);
//     let b = new Bubble(mouseX, mouseY, r, red, 0, blue);
//     bubbles.push(b);
// }

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].contains(mouseX, mouseY);
       bubbles[i].move();
       bubbles[i].show();
    }
}


class Bubble {
    constructor(x, y, r, col_r, col_g, col_b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
        this.strokeValue = 2;
    }

    changeColor() {
        this.brightness = 255;
    }

    contains(px, py) {
        let d = dist(px, py) 
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(this.strokeValue);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }

    edge() {
        background(55, 0, 0);
    }


}
