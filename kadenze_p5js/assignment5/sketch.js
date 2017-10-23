function setup() {
    createCanvas(500, 500);
}
function draw() {
    for(var x = 0; x <= width; x+=50) {
        for(var y = 0; y <= width; y+=50) {
            ellipse(x, y, 50, 50); 
        }
    }
}
