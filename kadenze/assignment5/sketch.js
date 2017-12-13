//non-linear narrative
// Alice excersise
var intro;
var drink;
var large;
var swimming;
/* 
    0 = intro
    1 = drink
    2 = large
    3 = swimming
*/

var state = 0;


function preload() {
    intro = loadImage("img/0_intro.gif");
    drink = loadImage("1_drink.jpg");
    large = loadImage("2_large.gif");
    swimming = loadImage("3_swimming.jpg");
}

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    background(0);
    image(intro, 0, 0);
}