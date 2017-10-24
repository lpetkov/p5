//Tutorial by D Shiffman:
// https://www.youtube.com/watch?v=nicMAoW6u1g&index=9&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
// Map function
var r = 0
var b = 255;

function setup() {
    createCanvas(600, 300);
}

function draw() {
    //bg
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);
    fill(250, 180, 222);
    ellipse(mouseX, 200, 64, 64);
}