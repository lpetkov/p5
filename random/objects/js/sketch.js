bubbles = [];

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(120);
    

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
    if (bubbles.length > 15) {
        bubbles.splice(0, 1);
    }

}


function mouseDragged() {
    let g = new Bubble(mouseX, mouseY, random(40,50));
    bubbles.push(g);
}

 function mouseClicked() {
     for (let i = 0; i < bubbles.length; i++) {
         bubbles.splice[i, 1];
     }
 }



class Bubble {
    constructor(x, y, r) {
        this.r = r;
        this.x = x;
        this.y = y;
    }

    show() {
        fill(255, 120);
        stroke(1);  
        ellipse(this.x, this.y, this.r);
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}