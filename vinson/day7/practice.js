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
    console.log('create element', type);
    const element = document.createElement(type);
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

const myDiv = createAnElement('div', document.body);
myDiv.innerHTML = '<p>This is the Right one</p>';
const imageSrc = 'https://image.shutterstock.com/image-photo/food-table-healthy-delicious-organic-600w-285854987.jpg';
const imageSrc2 = 'https://image.shutterstock.com/image-photo/friendship-freedom-beach-summer-holiday-600w-285854864.jpg';
const imageSrc3 = 'https://image.shutterstock.com/image-photo/diverse-beach-summer-party-roof-600w-285854462.jpg';
button.addEventListener('click', onAnythingClick);
function onAnythingClick() {
    console.log('click', this);
    const img = document.querySelector('img');
    img.src = imageSrc;
    h1.classList.add('another');
}
button2.addEventListener('click', cycleImages);
function onButton2Click() {
    console.log('click', this);
    const img = document.querySelector('img');
    img.src = imageSrc2;
    h1.classList.add('another');
}
const images = [];
images.push(imageSrc);
images.push(imageSrc2);
images.push(imageSrc3);
let currentIndex = 0;
function cycleImages() {
    const img = document.querySelector('img');
    img.src = images[currentIndex];
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
}
console.log(images);
