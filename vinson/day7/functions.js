
function addAParagraphThatExplainsTheApp() {
    const whatever = document.createElement('p');
    whatever.innerHTML = 'This is an app made with pure js.';
    document.body.appendChild(whatever);
    return whatever;
}

function addATitle() {
    const title = document.createElement('h2');
    document.body.appendChild(title);
    title.innerHTML = 'Our Project';
    return title;
}
function addImageTag() {
    const img = document.createElement('img');
    document.body.appendChild(img);
    return img;
}
function addTwoClassButtons() {
    const addButton = document.createElement('button');
    document.body.appendChild(addButton);
    addButton.innerHTML = 'ADD';
    const removeButton = document.createElement('button');
    document.body.appendChild(removeButton);
    removeButton.innerHTML = 'REMOVE';
    return {
        add: addButton,
        remove: removeButton,
    }
}

function addClassToParagraph() {
    paragraph.classList.add('selected');
}
function removeClassToParagraph() {
    paragraph.classList.remove('selected');
}

function addCycleButton() {
    const cycleButton = document.createElement('button');
    document.body.appendChild(cycleButton);
    cycleButton.innerHTML = 'cycle images';
    return cycleButton;
}

function nextImage() {
    imgTag.src = images[currentIndex];
    currentIndex++;

    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }

}
