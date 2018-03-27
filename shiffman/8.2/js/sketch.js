function setup() {
    createCanvas(200, 200);
    createP("My favourite color is purple");
    createElement("h1", "my favorite number's bellow");
}

function mousePressed() {
    createP(`My fav numbr is ${random(100)}`);
}
function draw() {
    background(0);
}
