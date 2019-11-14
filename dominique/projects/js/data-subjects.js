const subjects = {
    'Create a Variable': {
        titleText: 'Create a Variable', 
        displayText: `
        var myVariable = 1;
        const myConstant = true;
        let myLet = 'let';
        `
    },

    'Get an Element': {
        titleText: 'Get an Element',
        displayText: `
            var myVariable = document.querrySelector('h2');
            // Returns a single element

            const myConstant = document.querySelectorAll('span');
            // Returns a list of elements
            `
    },

    'Change Element Text': {
        titleText: 'Change Element Text',
        displayText: `
            var myElement = document.querrySelector('h2');
            myElement.innerHTML = 'some text';
            myElement.innerText = 'some text';
            `
    },

    'Add/Remove Class to Element': {
        titleText: 'Add/Remove Class to Element',
        displayText: `
            var myElement = document.querrySelector('h2');
            myElement.classlist.add('anyClass');
            myElement.classlist.remove('anyClass');
            `
    },

    'Loops': {
        titleText: 'Loops',
        displayText: `
            for (let i = 0; i < 100; i++) {
                console.log(i);
            });

            [1, 2, 3, 4, 5].forEach( function ( item ) {
                console.log(item);
            });

            [1, 2, 3, 4, 5].filter( function ( item ) {
                console.log(item);
                (item == 2) { return true }
            });

        `
    }
};