var nums = [100, 25, 46, 72, 88]

var r = random([0], [255]);

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0);

  for (var i = 0; i < 5; i++) {
    fill(mouseY, mouseY, 0);
    ellipse((i * 100)+100, 200, nums[i], nums[i]);
 }

}
