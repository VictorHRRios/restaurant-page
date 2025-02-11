import "./styles.css";
import {loadMenu} from "./menu.js";
import { pageLoad } from "./main.js";
import { contactLoad } from "./contact.js";

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

aboutButton.addEventListener('click', () => {
    content.textContent = '';
    contactLoad();
})

console.log("test!");