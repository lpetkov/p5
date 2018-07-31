let textbox;
let slider;
let paragraph;

function setup() {
    noCanvas();
<<<<<<< HEAD
    paragraph = createP('starting text');
    textbox = createInput('enter text');
    slider = createSlider(10, 64, 16);

    slider.input(updateText);
=======
    textbox = createInput("enter text");
    slider = createSlider(10, 64, 16,);
    paragraph = createP("starting text");
    
    textbox.input(doSomething);
>>>>>>> 6d574136cf7ad03668b686089839d3bfd3a0d8e1
    slider.input(updateSize);
}

function updateSize() {
    paragraph.style("font-size", slider.value() + "pt");
}

<<<<<<< HEAD
function updateText() {
    paragraph.html(slider.value());

}

=======
function doSomething() {
    paragraph.html(textbox.value());
}
>>>>>>> 6d574136cf7ad03668b686089839d3bfd3a0d8e1
