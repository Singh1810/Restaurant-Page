import _ from 'lodash';
import './style.css';
import { initialRender } from './initialRender';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContactUs } from './contactUs';

initialRender();
renderHome();

(function () {

    // Cache DOM
    let homeButton = document.querySelector('button.home');
    let menuButton = document.querySelector('button.menu');
    let contactUsButton = document.querySelector('button.contact-us');
    
    homeButton.addEventListener('click', () => { console.log('home click'); renderHome(); });
    menuButton.addEventListener('click', () => { console.log('menu click'); renderMenu(); });
    contactUsButton.addEventListener('click', () => { console.log('contact us click'); renderContactUs(); });


})();




console.log("testString");