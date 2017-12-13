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
var img;
var state = 0;
var nextState = 0;
var counter = 0;
var typed = "";
var hasCried = false;


function preload() {
    intro = loadImage("assets/img/0_intro.gif");
    drink = loadImage("assets/img/1_drink.jpg");
    large = loadImage("assets/img/2_large.gif");
    swimming = loadImage("assets/img/3_swimming.jpg");
}

function setup() {  // setup() waits until preload() is done
    createCanvas(800, 600);
    textFont("Helvetica");
    textSize(22);
    textAlign(CENTER);
}

function draw() {
    background(255);

    if (state == nextState) {
        if (state == 0) {
            image(intro, 200, 50);
        } else if (state == 1) {
            image(drink, 200, 50);
        } else if (state == 2) {
            image(large, 200, 50);
        } else if (state == 3) {
            image(swimming, 200, 50, 300, 300);
        }
    } else {
        counter ++;
        if(counter == 30) {
            state = nextState;
            counter = 0;
        }
        var a = map(counter, 0, 30, 0, 255);
        tint(255, a);
    }

    text(typed, 0, 430, width, 30);
}

function keyPressed() {
    if (keyCode == BACKSPACE) {
        typed = '';
    }
}

function keyTyped() {
    if (key == '0') {
        nextState = 0;
    } else if (key == '1') {
        nextState = 1;
    } else if (key == '2') {
        nextState = 2;
    } else if (key == '3') {
        nextState = 3;
    } else if (keyCode == RETURN) {
        if (typed == 'drink') {
            typed = '';
            if (hasCried) {
                nextState = 3;
            } else {
                nextState = 1;
            }
        } else if (typed == 'eat') {
            nextState = 2;
            typed = '';
        } else if (typed == 'intro') {
            typed = 0;
            typed = '';

        } else if (typed == 'cry' && nextState == 2) {
            hasCried = true;
            typed = '';
        }  
    } else {
        typed += key;
    }
}