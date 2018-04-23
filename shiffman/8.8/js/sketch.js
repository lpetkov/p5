let textbox;
let slider;
let paragraph;

function setup() {
    noCanvas();
    textbox = createInput("enter text");
    slider = createSlider(10, 64, 16,);
    paragraph = createP("starting text");
    
    textbox.input(doSomething);
    slider.input(updateSize);
}

function updateSize() {
    paragraph.style("font-size", slider.value() + "pt");
}

function doSomething() {
    paragraph.html(textbox.value());
}
