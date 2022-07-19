// rendering menu page


// rendering menu page

import { divide, rest } from "lodash";
import { createElement } from "./initialRender";

import menuMainImage from './img/menu/main.png';
import pastaImg from './img/menu/pasta.png';
import riceChickenImg from './img/menu/rice-and-chicken.png';
import riceVeggiesImg from './img/menu/rice-veggies.png';
import saladImg from './img/menu/salad.png';







export function renderMenu() {
    



    document.title = "Menu";


    let contentDiv = document.querySelector('.body>.content');
    contentDiv.textContent = '';


    let textDiv = createElement('div', 'text');
    textDiv.classList.add('restaurant');
    
    let titleDiv = createElement('div', 'title');
    titleDiv.textContent = 'Our Menu';
    textDiv.appendChild(titleDiv);
    contentDiv.appendChild(textDiv);


    let menuQuoteDiv = createElement('div', 'menu-quote');
    let quoteDiv = createElement('div', 'text');
    quoteDiv.textContent = "It's not just food, It's an experience";
    menuQuoteDiv.appendChild(quoteDiv);

    let quoteImg = createElement('img', 'photo');
    quoteImg.classList.add('quote-img');
    quoteImg.src = menuMainImage;
    menuQuoteDiv.appendChild(quoteImg);
    contentDiv.appendChild(menuQuoteDiv);


    function createMenuEntry(photo, name, energyAmount, price) { 
        let menuEntryDiv = createElement('div', 'menu-entry');
        
        let img = createElement('img', 'photo');
        img.src = photo;
        menuEntryDiv.appendChild(img);

        let nameDiv    = createElement('div', 'name');
        nameDiv.textContent = name;
        menuEntryDiv.appendChild(nameDiv);

        let ul = createElement('ul');
        let energyAmountLi = createElement('li');
        energyAmountLi.textContent = `Energy Amount: ${energyAmount}`;
        ul.appendChild(energyAmountLi);

        let priceLi = createElement('li');
        priceLi.textContent = `Price: ${price}`;
        ul.appendChild(priceLi);
        menuEntryDiv.appendChild(ul);

        return menuEntryDiv;
    }
    let menuListDiv = createElement('div', 'menu-list');
    menuListDiv.appendChild(createMenuEntry(pastaImg, "Pasta with veggies", "223ckal", "140 Rs."));
    menuListDiv.appendChild(createMenuEntry(riceChickenImg, "Rice & Chicken", "299ckal", "400 Rs."));
    menuListDiv.appendChild(createMenuEntry(riceVeggiesImg, "Meatballs & Rice", "311ckal", "200 Rs."));
    menuListDiv.appendChild(createMenuEntry(saladImg, "Healthy Salad", "199ckal", "150 Rs."));


    contentDiv.appendChild(menuListDiv);
}