const titleTag = addATitle();
const paragraph = addAParagraphThatExplainsTheApp();
const addRemoveButtons = addTwoClassButtons();
addRemoveButtons.add.addEventListener('click', addClassToParagraph );
addRemoveButtons.remove.addEventListener('click', removeClassToParagraph);
const cycleButton = addCycleButton();
const imgTag = addImageTag();
let currentIndex = 0;
cycleButton.addEventListener('click', nextImage);
// created string variables that are image path
const images = [
'https://image.shutterstock.com/image-photo/food-table-healthy-delicious-organic-600w-285854987.jpg',
'https://image.shutterstock.com/image-photo/friendship-freedom-beach-summer-holiday-600w-285854864.jpg',
'https://image.shutterstock.com/image-photo/diverse-beach-summer-party-roof-600w-285854462.jpg',
    ];
