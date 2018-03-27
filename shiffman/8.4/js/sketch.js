let bgcolor;
let button; 

function setup() {
    canvas = createCanvas(200, 200);
    bgcolor = color(200);
    button = createButton("go go");
    button.mousePressed(changeColor);

}

function changeColor() {
    bgcolor = random(random(255));
}

// function mousePressed() {
//     changeColor();
// }


function draw() {
    background(bgcolor);
}
