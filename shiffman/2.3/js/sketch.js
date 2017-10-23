//Tutorial by D Shiffman:
//https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8


var circle = {
    x: 0, 
    y: 100,
    d: 50
};

var color = {
    r: 218,
    g: 160,
    b: 221
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(color.r, color.g, color.b);
    fill(250, 200, 200);
    ellipse(circle.x, circle.y, circle.d, circle.d);

    circle.x++;
}