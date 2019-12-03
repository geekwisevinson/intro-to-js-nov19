// get element references
const h1 = document.querySelector('h1');
const button = document.querySelectorAll('button')[0];

// change whats nested inside
button.innerHTML = 'Anything';
h1.innerHTML = 'This is practice';

// add a class
h1.classList.add('whatever');


// create a function that takes a string element type

function createAnElement(type, parent) {
    console.log('create element', type);
    return document.createElement(type);
}

const myDiv = createAnElement('div');
myDiv.innerHTML = '<p>This is the Right one</p>';
const p = myDiv.querySelector('p');
console.log(myDiv);
document.body.insertBefore(myDiv, button);
console.log(p);
