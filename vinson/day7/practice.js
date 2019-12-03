// get element references
const h1 = document.querySelector('h1');
const button = document.querySelectorAll('button')[0];
const button2 = document.querySelectorAll('button')[1];

// change whats nested inside
button.innerText = 'Anything';
h1.innerHTML = 'This is practice';

// add a class
h1.classList.add('whatever');

// create a function that takes a string element type
function createAnElement(type, parent) {
    const element = document.createElement(type);
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}
// create element div and add some innerHTML
const myDiv = createAnElement('div', document.body);
myDiv.innerHTML = '<p>This is the Right one</p>';

// created string variables that are image path
const imageSrc = 'https://image.shutterstock.com/image-photo/food-table-healthy-delicious-organic-600w-285854987.jpg';
const imageSrc2 = 'https://image.shutterstock.com/image-photo/friendship-freedom-beach-summer-holiday-600w-285854864.jpg';
const imageSrc3 = 'https://image.shutterstock.com/image-photo/diverse-beach-summer-party-roof-600w-285854462.jpg';

// add an event listener for button
button.addEventListener('click', onAnythingClick);
function onAnythingClick() {
    const img = document.querySelector('img');
    img.src = imageSrc;
    h1.classList.add('another');
}
// add an event listener for button2
button2.addEventListener('click', cycleImages);
function onButton2Click() {
    const img = document.querySelector('img');
    img.src = imageSrc2;
    h1.classList.add('another');
}
// create an array to hold the paths for images;
const images = [];
images.push(imageSrc);
images.push(imageSrc2);
images.push(imageSrc3);
// create a variable for the current index;
let currentIndex = 0;
function cycleImages() {
    const img = document.querySelectorAll('img')[0];
    img.src = images[currentIndex];
    currentIndex++;
    // if (currentIndex > images.length - 1) {
    //     currentIndex = 0;
    // }
    if (!images[currentIndex]) {
        currentIndex = 0;
    }
}

const input = document.createElement('input');
document.body.appendChild(input);
input.placeholder = 'enter a color';


input.addEventListener('keyup', setValue);
function setValue(event) {
    if (event.code === 'Enter') {
        window.localStorage.setItem('theme', input.value);
        document.body.style.backgroundColor = input.value;
    }
}
const theme = window.localStorage.getItem('theme');
if (theme) {
    document.body.style.backgroundColor = theme;
}

