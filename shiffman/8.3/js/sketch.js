/*jshint esversion: 6 */ 
let canvas;
let h1;

function setup() {
    canvas = createCanvas(200, 200); 
    canvas.position(0, 0);

    h1 = createElement('h1', 'my fav number is below');

}

function mousePressed() {
    createP(`my fav number is ${random(0, 10)}`);
}

function draw() {
//    background(0);
    clear();
    fill(255, 0, 0);
    rect(100, 100, 50, 50);

}
