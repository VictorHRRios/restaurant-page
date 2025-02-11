const header = () => {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    const heading = document.createElement("div");
    heading.classList.add("heading")
    const h1 = document.createElement("h1");
    h1.textContent = "Contact"
    heading.appendChild(h1);
    headerContainer.appendChild(heading);
    return headerContainer
}

const contactItem = (name, description, phone, mail) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("contact-container");
    const h3 = document.createElement("h3");
    h3.textContent = name;
    const p = document.createElement("p");
    p.textContent = description;
    const phoneElement = document.createElement('p');
    phoneElement.textContent = phone;
    const mailElement = document.createElement('p');
    mailElement.textContent = mail;
    sectionContainer.appendChild(h3);
    sectionContainer.appendChild(p);
    sectionContainer.appendChild(phoneElement);
    sectionContainer.appendChild(mailElement);
    return sectionContainer
}


const contactLoad = () => {
    const mainContent = document.querySelector("div#content");
    const divElement = document.createElement("div");
    const headerElement = header();
    divElement.classList.add("contact");
    divElement.append(headerElement);

    const contact1 = contactItem("Victor", "CEO", "6622998654", "03victor.rios@gmail.com");
    divElement.append(contact1);
    mainContent.append(divElement);
}


export {contactLoad}