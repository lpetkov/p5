let bgcolor;
let button;
let canvas;
let slider
let nameInput;
var nameP;

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(200);
    nameP = createP('Your name');
    button = createButton("label");
    button.mousePressed(changeColor);


    canvas.mouseOver(overpara);
    canvas.mouseOut(outpara);

    slider = createSlider(10, 100, 47);
    nameInput = createInput("enter your name");

   // nameInput.changed(updateText);

    nameInput.input(updateText);
}

function updateText() {
    nameP.html(nameInput.value());
}

function changeColor() {
    bgcolor = color(random(200));
}

function overpara() {
    nameP.html("your mouse is over me");
}

function outpara() {
    nameP.html("your mouse is out");
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, slider.value(), slider.value());
    fill(20);
    text(nameInput.value(), 10, 100);

    //nameP.html(nameInput.value());
}
