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

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++){
       bubbles[i].move();
       bubbles[i].show();
       bubbles[i].hovered(mouseX, mouseY);
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

    hovered(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r && this.brightness != 125) {
           this.strokeValue = 0;
        } else {
            this.strokeValue = 2;
        }
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r && this.brightness < 255 ) {
            this.brightness = 255;
        } else {
            this.brightness = 0;
        }
    }

}
