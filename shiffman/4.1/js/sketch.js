
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    fill(40);
    noStroke();

    // var x = 0;
    // while(x < width) {
    //     ellipse(x, 150, 25, 25);
    //     x = x + 50;
    // }

    for (var x = 0; x <= width; x += 50){
        for (var y = 0; y <= height; y += 50) {
            ellipse(x, y, 25, 25);
        }
    }
}