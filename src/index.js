import "./styles.css";
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {aboutUsPage} from './about.js';

const homePageButton = document.getElementById('home-button');
const menuPageButton = document.getElementById('menu-button');
const aboutUsButton = document.getElementById('about-button');

const mainDiv = document.getElementById('main-box');

mainDiv.innerHTML = '';
homePage();


menuPageButton.addEventListener('click', () => {
    mainDiv.innerHTML = '';
    menuPage();
});

aboutUsButton.addEventListener('click', () => {
    mainDiv.innerHTML = '';
    aboutUsPage();
});

homePageButton.addEventListener('click', () => {
    mainDiv.innerHTML = '';
    homePage();
});
