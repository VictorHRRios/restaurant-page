import "./styles.css";
import {loadMenu} from "./menu.js";
import { pageLoad } from "./main.js";

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');
const content = document.querySelector('#content');


pageLoad();

homeButton.addEventListener('click', () => {
    content.textContent = '';
    pageLoad();
})


menuButton.addEventListener('click', () => {
    content.textContent = '';
    loadMenu();
})

console.log("test!");