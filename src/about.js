export {aboutUsPage};

const aboutUsPage = function(){

const mainDiv = document.getElementById('main-box');

    const mainTitle = document.createElement('h1');
    const description = document.createElement('p');
    const description2 = document.createElement('p');

    mainTitle.innerHTML = 'About Us';
    description.innerHTML = 'We are just passionate about pancakes and eggs, but really... this is just for practice';
    description2.innerHTML = 'If you looked it through, thank you and all the best for you :D';

    mainDiv.appendChild(mainTitle);
    mainDiv.appendChild(description);
    mainDiv.appendChild(description2);
}

