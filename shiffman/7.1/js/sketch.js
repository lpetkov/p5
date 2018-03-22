let nums = [150, 250, 350, 450];
let words = ["metal", "heavy", "guitar", "metallica", "grr"];
let index = 0;

let num = 21;
function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    // ellipse(100, 200, num);
    // ellipse(200, 200, nums[2], nums[2]);

    for(var i = 0; i < nums.length; i++) {
        ellipse(nums[i], nums[i], 50, 50);
    }

    textSize(12);
    fill(255);
    text(words[index], 12, 200);
}

function mousePressed() {
    index = index + 1;
    if (index == words.length) {
        index = 0;
    }
}