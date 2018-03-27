/*jshint esversion: 6 */ 
let bubbles = [];
let kittens = [];


function preload() {
    flower = loadImage("img/flower.png");
    for (let i = 0; i < 5; i++) {
        kittens[i] = loadImage(`img/kitten${i}.jpg`);
    }
}

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(50, 60);
        let kitten = random(kittens);
        bubbles[i] = new Bubble(x, y, r, kitten);
    }
}

function draw() {
    background(0);


    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false;
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)) {
                overlapping = true;
            }
        }
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

class Bubble {
    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.kitten = img;
    }

    intersects(other) {

        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    clicked(px, py) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.kitten = random(kittens);
        }
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
        image(this.kitten, this.x, this.y, this.r, this.r);
    }
}
