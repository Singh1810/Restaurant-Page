
import { createElement } from "./initialRender";
import logo from './img/logo.png';

export function renderContactUs() {
    document.title = "Contact Us";


    let contentDiv = document.querySelector('.body>.content');
    contentDiv.textContent = '';
    contentDiv.classList.add('contact-us');

    let topDiv = createElement('div', 'top');
    let quoteDiv = createElement('div', 'customer-perception');
    quoteDiv.textContent = "The customer's perception is our reality.";
    topDiv.appendChild(quoteDiv);

    let logoImg = createElement('img', 'logo-big');
    logoImg.src = logo;
    topDiv.appendChild(logoImg);    
    contentDiv.appendChild(topDiv);


    let bottomDiv = createElement('div', 'bottom');

    
    function createListItem(textContent) {
        let listItem = document.createElement('li');
        listItem.textContent = textContent;
        return listItem;
    }

    let contactInfoUl = createElement('ul', 'contact-info');
    contactInfoUl.appendChild(createListItem("Text or call us:"));
    contactInfoUl.appendChild(createListItem("9816962387"));
    contactInfoUl.appendChild(createListItem(""));
    contactInfoUl.appendChild(createListItem("Email us:"));
    contactInfoUl.appendChild(createListItem("party.fowl@gmail.com"));

    contentDiv.appendChild(contactInfoUl);
}