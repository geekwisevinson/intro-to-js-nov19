const webPage = [
    {
    query: 'body',
    type: 'h1',
    text: 'amazing'
},     {
        query: 'body',
        type: 'div',
        text: 'profile here'
    },{
        query: 'body',
        type: 'ul',
}, {
        query: 'body',
        type: 'p',
        text: 'Welcome to my user list'
    }
];

let selected = null;

webPage.forEach( el => {
    createElements3(el);
});

users.forEach( function (userObj) {
   console.log('username', userObj);
    const li = createElements3({
        query: 'ul',
        type: 'li',
        text: userLi(userObj),
    });
    li.addEventListener('click', function () {
        if (selected) {
            selected.classList.remove('selected');
        }
        selected = this;
        const name = this.querySelector('h3').innerText;
        this.classList.add('selected');
        const user = users.filter( function (item) {
            return item.name === name;
        })[0];
        document.querySelector('div').innerHTML = profileHtml(user);
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

function profileHtml(user) {
return  `
<h2> ${user.name},</h2>
<img height="300" src="${user.avatar}" alt="">
<ul>
<li>
    age: ${user.age},
</li>
<li>
      job: ${user.job},
</li>
<li>
      vip: ${user.vip},
</li>
<li>
status: ${user.status}
</li>
</ul>
      
        `
}

function createElements3( {type, query, text } ) {
    const el = document.createElement(type);
    document.querySelector(query).appendChild(el);
    if (text) {
        el.innerHTML = text;
    }
    return el;
}
