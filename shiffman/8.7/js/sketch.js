let bgcolor;
let button;
let txt;

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(51);
    txt = createP("some p5 text");
    button = createButton("go");

    txt.style("background-color", "pink");
}


function draw() {
    background(155);
    fill(255, 0, 175);
    ellipse(100, 100, 50, 50);

}
