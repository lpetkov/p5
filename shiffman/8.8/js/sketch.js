let textbox;
let slider;
let paragraph;

function setup() {
    noCanvas();
    paragraph = createP('starting text');
    textbox = createInput('enter text');
    slider = createSlider(10, 64, 16);

    slider.input(updateText);
    slider.input(updateSize);
}

function updateSize() {
    paragraph.style("font-size", slider.value() + "pt");
}

function updateText() {
    paragraph.html(slider.value());

}

