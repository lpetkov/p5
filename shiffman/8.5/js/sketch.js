let bgcolor;
let button;
let canvas;
let slider
let input;
var nameP;

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(200);
    nameP = createP('Your name');
    button = createButton("label");
    button.mousePressed(changeColor);

    slider = createSlider(10, 100, 47);

    input = createInput("enter your name");
}

function changeColor() {
    bgcolor = color(random(200));
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, slider.value(), slider.value());
    fill(20);
    text(input.value(), 10, 100);

    nameP.html(input.value());
}
