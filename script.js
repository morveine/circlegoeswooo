const circle = document.getElementById('circle-form');
const circleDiv = document.getElementById('circle-div');
const sizeInput = document.getElementById('slider-size');
const colorInput = document.getElementById('color-picker');
const root = document.documentElement;
let mousePosition;
let offset = [0, 0];
let isDown = false;

sizeInput.addEventListener('input', changeSize);
colorInput.addEventListener('input', changeColor);
// circle.addEventListener('click', dragElement);
circleDiv.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        circleDiv.offsetLeft - e.clientX,
        circleDiv.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    if (isDown) {
        event.preventDefault();
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        circleDiv.style.left = (mousePosition.x + offset[0]) + 'px';
        circleDiv.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}, true);


function changeColor() {
    circle.style.backgroundColor = colorInput.value;
};

function changeSize() {
    root.style.setProperty('--circle-dimension', sizeInput.value + 'px')
};

function dragElement() { };