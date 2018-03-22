function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(180);
    for(var x = 0; x <= width; x+=50) {
        for(var y = 0; y <= width; y+=50) {
            line(x, y+5, x, y+15);
            line(x+5, y+5, x+5, y+15);
            line(x+10, y+5, x+10, y+15);

        }
    }
}
