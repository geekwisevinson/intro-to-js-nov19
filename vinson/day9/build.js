const webPage = [{
    query: 'body',
    type: 'h1',
    text: 'amazing'
}, {
        query: 'body',
        type: 'ul',
}, {
        query: 'body',
        type: 'p',
        text: 'Welcome to my user list'
    }
];

webPage.forEach( el => {
    createElements3(el);
});

users.forEach( function (userObj) {
   console.log('username', userObj);
    createElements3({
        query: 'ul',
        type: 'li',
        text: userLi(userObj),
    })
});

function userLi(user) {

    return `
        <div>
        <h3>${user.name}</h3>
        <div>
        age: ${user.age} <br>
        status: ${user.status}
</div>
</div>
    `;
}

















function createElements2(type, query, text) {
    const el = document.createElement(type);
    document.querySelector(query).appendChild(el);
    if (text) {
        el.innerText = text;
    }
}

function createElements3( {type, query, text } ) {
    const el = document.createElement(type);
    document.querySelector(query).appendChild(el);
    if (text) {
        el.innerHTML = text;
    }
}
