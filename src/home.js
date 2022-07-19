// rendering menu page

import { divide, rest } from "lodash";
import restaurantImage from './img/photo.jpg'


export function renderHome() {
    document.title = "Home";


    let contentDiv = document.querySelector('.body>.content');
    contentDiv.textContent = '';


    let textDiv = document.createElement('div');
    textDiv.className = 'text';

    let titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = "Party Fowl...";
    textDiv.appendChild(titleDiv);

    let TextContenDiv = document.createElement('div');
    TextContenDiv.className = 'content';
    TextContenDiv.textContent = "We’re always in the mood for food"
    textDiv.appendChild(TextContenDiv);
    contentDiv.appendChild(textDiv);




    let restaurantPhotoImg = document.createElement('img');
    restaurantPhotoImg.classList.add('restaurant-photo');
    restaurantPhotoImg.src = restaurantImage;
    contentDiv.appendChild(restaurantPhotoImg);



    let infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    let addressDiv = document.createElement('div');
    addressDiv.textContent = "Sebiz Square Mohali(sector 67) Punjab";
    let workingHoursDiv = document.createElement('div');
    workingHoursDiv.textContent = "Monday-Sunday 10:00 - 22:00"

    infoDiv.appendChild(addressDiv);
    infoDiv.appendChild(workingHoursDiv);
    contentDiv.appendChild(infoDiv);
}