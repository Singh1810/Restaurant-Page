// initial render

export function createElement(type, className) { 
    let element = document.createElement(type);
    if (className) { element.classList.add(className); }
    return element;
}


export function initialRender() {
    let contentDiv = document.createElement('div');
    contentDiv.id = 'content';

    let headerDiv = document.createElement('div')
    headerDiv.className = 'header';
    contentDiv.appendChild(headerDiv);

    let navBarDiv = document.createElement('div');
    navBarDiv.className = 'nav-bar';
    headerDiv.appendChild(navBarDiv);


    function makeButton(className, textContent) { // helper function for making buttons
        let button = document.createElement('button');
        button.className = className;
        button.textContent = textContent;
        return button;
    }

    navBarDiv.appendChild(makeButton('home', "Home"));
    navBarDiv.appendChild(makeButton('menu', "Menu"));
    navBarDiv.appendChild(makeButton('contact-us', "Contact Us"));



    let bodyDiv = document.createElement('div');
    bodyDiv.className = 'body';
    let bodyChildContentDiv = document.createElement('div')
    bodyChildContentDiv.className = 'content';
    bodyDiv.appendChild(bodyChildContentDiv);
    contentDiv.appendChild(bodyDiv);


    document.body.append(contentDiv);
}
