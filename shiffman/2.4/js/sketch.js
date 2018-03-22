//Tutorial by D Shiffman:
// https://www.youtube.com/watch?v=nicMAoW6u1g&index=9&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

speed = 5;
x = 0;
function setup() {
    createCanvas(600, 300);
}

function draw() {
    background(#242424);
    ellipse(x, 200, 64, 64);
    x += speed;

}