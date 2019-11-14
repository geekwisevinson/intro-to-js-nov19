const subjects = {
    'create variable' : {
        titleText: 'Create a variable',
        displayText: `
                    var myVariable = 1;
                    const myConstant = true;
                    let myLet = 'let';
                `
    },
    'get an element': {
        titleText: 'Get an Element',
        displayText: `
                     var myVariable = document.querySelector('h2');
                     // returns a single element

                    const myConstant = document.querySelectorAll('span');
                    // returns a list of elements
                `
    },
    'change element text': {
        titleText: `Change element text`,
        displayText: `
                    var myElement = document.querySelector('h2');
                    myElement.innerHTML = 'some text';
                    myElement.innerText = 'some text';
                `,
    },
    'add class to element': {
        titleText: `Add/Remove Class To Element`,
        displayText: `
                    var myElement = document.querySelector('h2');
                    myElement.classList.add('anyClass');
                     myElement.classList.remove('anyClass');
                `,
    },
    'loops': {
        titleText: `Loops`,
        displayText: `
                    for (let i = 0; i < 100; i++ ) {
                        console.log(i);
                    }
                    [1, 2, 3, 4, 5].forEach( function( item ) {
                        console.log(item);
                    });
                      [1, 2, 3, 4, 5].filter( function( item ) {
                        console.log(item);
                         (item == 2 ) { return true}
                    });
                    
                `,
    }
};

console.log('end of external script');
