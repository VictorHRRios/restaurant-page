import horchataImage from "./img/horchata.png"

const header = () => {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    const heading = document.createElement("div");
    heading.classList.add("heading")
    const h1 = document.createElement("h1");
    h1.textContent = "Menu"
    heading.appendChild(h1);
    headerContainer.appendChild(heading);
    return headerContainer
}

const section = (title) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("section-container");
    const heading = document.createElement("div");
    heading.classList.add("heading")
    const h2 = document.createElement("h2");
    h2.textContent = title;
    heading.appendChild(h2);
    sectionContainer.appendChild(heading);
    return sectionContainer
}

const foodItem = (name, description, price, image) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("item-container");
    const h3 = document.createElement("h3");
    h3.textContent = name;
    const p = document.createElement("p");
    p.textContent = description;
    const priceElement = document.createElement('p');
    priceElement.textContent = price;
    sectionContainer.appendChild(h3);
    sectionContainer.appendChild(p);
    sectionContainer.appendChild(priceElement);
    sectionContainer.appendChild(image);
    return sectionContainer
}


const loadMenu = () => {
    const mainContent = document.querySelector("div#content");
    const divElement = document.createElement("div");
    const headerElement = header();
    const beverageSection = section("Bebidas");
    const entriesSection = section("Entradas");
    const dishesSection = section("Comida");
    divElement.classList.add("menu");
    divElement.append(headerElement);
    divElement.append(beverageSection);
    const img1 = document.createElement("img");
    img1.src = horchataImage;
    const beverage1 = foodItem("Horchata", "Bebida hecha con chufas u otros frutos, machacados, exprimidos y mezclados con agua y azúcar", "20$", img1);
    divElement.append(beverage1);

    divElement.append(entriesSection);
    divElement.append(dishesSection);
    mainContent.append(divElement);
}


export {loadMenu}