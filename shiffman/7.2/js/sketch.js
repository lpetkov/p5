let nums = [100, 25, 46, 72];
function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(40);
    noFill();
    strokeWeight(4);
    stroke(255);

    for (let i = 0; i < 4; i++) {
        fill(51);
        ellipse(100 + i * 100, 200,  nums[i],  nums[i]);
    }

}
