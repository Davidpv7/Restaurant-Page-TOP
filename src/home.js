import pancakePhoto from './pancakePhoto.jpg';
export {homePage};

const homePage = function() {

    const mainDiv = document.getElementById('main-box');


    const mainTitle = document.createElement('h1');
    const hiMessage = document.createElement('p');
    const welcomeMessage = document.createElement('p');
    const image = document.createElement('img');
    const openingHours = document.createElement('h1')
    const hoursMtoF = document.createElement('p');
    const hoursStoS = document.createElement('p');
    const locationMainMessage = document.createElement('h1');
    const location = document.createElement('p');


    mainTitle.innerHTML = "Pancakes and Eggs Restaurant";
    hiMessage.innerHTML = 'Hi!'
    welcomeMessage.innerHTML = 'Welcome to our simple and delicious restaurant'
    image.id = 'pancake';
    image.src = pancakePhoto;
    openingHours.innerHTML = 'Opening Hours';
    hoursMtoF.innerHTML = 'Monday - Friday: 9:00am - 10:00pm';
    hoursStoS.innerHTML = 'Saturday - Sunday: Closed';
    locationMainMessage.innerHTML = 'Location';
    location.innerHTML = 'Sydney CBD, next to Kangaroo Station';


    mainDiv.appendChild(mainTitle);
    mainDiv.appendChild(hiMessage);
    mainDiv.appendChild(welcomeMessage);
    mainDiv.appendChild(image);
    mainDiv.appendChild(openingHours);
    mainDiv.appendChild(hoursMtoF);
    mainDiv.appendChild(hoursStoS);
    mainDiv.appendChild(locationMainMessage);
    mainDiv.appendChild(location);
};