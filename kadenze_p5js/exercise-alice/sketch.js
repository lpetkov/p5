var intro;
var drink;
var large;
var swimming;

/* 0 = intro
 * 1 = drink
 * 2= large
 * 3 = swimming
*/

var state = 0;
var nextState = 0;
var counter = 0;
var typed = "";
var hasCried = false;

function preload() {
    intro =loadImage("img/0-intro.png");
    drink = loadImage("img/1-drink.gif");
    large = loadImage("img/2-large.gif");
    swimming = loadImage("img/3-swimming.jpg");
}

function setup() {
    createCanvas(1024, 768);
    textFont("Helvetica");
    textSize(22);
    textAlign(CENTER);
}
function draw() {
    background(255);

    if (state == nextState) {
        if (state == 0) {
        image(intro, 200, 0);

        } if (state == 1) {
            image(drink, 200, 0);

        } if (state == 2) {
            image(large, 200, 0);

        } if (state == 3) {
            image(swimming, 200, 0);
        }
    } else {
        counter++;
        if (counter == 30) {
            state = nextState;
            counter = 0;
        }
        var a = map(counter, 0, 30, 0, 255);
        tint(255, a);
        if (nextState == 0) {
        image(intro, 200, 0);
        } if (nextState == 1) {
            image(drink, 200, 0);
        } if (nextState == 2) {
            image(large, 200, 0);
        } if (nextState == 3) {
            image(swimming, 200, 0);
        }

        tint(255, 255-a);
        if (state == 0) {
        image(intro, 200, 0);
        } if (state == 1) {
            image(drink, 200, 0);
        } if (state == 2) {
            image(large, 200, 0);
        } if (state == 3) {
            image(swimming, 200, 0);
        }
    }

    text(typed, 0, 650, width, 30);

}

function keyPressed() {
    if(keyCode == BACKSPACE) {
        typed = '';
    }
}

function keyTyped() {
    if (key == '0') {
        nextState = 0;
    } if (key == '1') {
        nextState = 1;
    } if (key == '2') {
        nextState = 2;
    } if (key =='3') {
        nextState = 3;
    } else if (keyCode == RETURN) {

        if (typed == 'drink') {
            typed ='';

            if(hasCried) {
                nextState = 3;
            } else {
                nextState = 1;
            }

        } else if (typed == 'eat') {
            nextState = 2;
            typed = '';
        } else if (typed == 'intro') {
            nextState = 0;
            typed = '';
        } else if (typed == 'cry' && state == 2) {
            hasCried = true;
            typed = '';
        }
    } else {
    typed += key;
  }
}
