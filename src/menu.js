import funnypancake from './pancakefunny.png';
import egg from './egg.png';
export {menuPage};

const menuPage = function(){

    const mainDiv = document.getElementById('main-box');

    const mainTitle = document.createElement('h1');
    const eggTile = document.createElement('h2');
    const imageEgg = document.createElement('img');
    const priceEgg = document.createElement('p');
    const descriptionEgg = document.createElement('p');
    const pancakeTitle = document.createElement('h2');
    const imagePancake = document.createElement('img');
    const pricePancake = document.createElement('p');
    const descriptionPancake = document.createElement('p');

    mainTitle.innerHTML = 'Menu';
    eggTile.innerHTML = 'Eggs';
    imageEgg.src = egg;
    imageEgg.id = 'egg';
    priceEgg.innerHTML = '$22';
    descriptionEgg.innerHTML = 'Delicous eggs cooked your way: fried, scrambled, omelette';
    pancakeTitle.innerHTML = 'Pancakes';
    imagePancake.src = funnypancake;
    imagePancake.id = 'funnypancake';
    pricePancake.innerHTML = '$25';
    descriptionPancake.innerHTML = 'Fluffy pancakes, with your choice of sauce: caramel, nutella, chocolate';

    mainDiv.appendChild(mainTitle);
    mainDiv.appendChild(eggTile);
    mainDiv.appendChild(imageEgg);
    mainDiv.appendChild(priceEgg);
    mainDiv.appendChild(descriptionEgg);
    mainDiv.appendChild(pancakeTitle);
    mainDiv.appendChild(imagePancake);
    mainDiv.appendChild(pricePancake);
    mainDiv.appendChild(descriptionPancake);    
}
