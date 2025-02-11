
const header = () => {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    const heading = document.createElement("div");
    heading.classList.add("heading")
    const h1 = document.createElement("h1");
    h1.textContent = "Le comide"
    heading.appendChild(h1);
    headerContainer.appendChild(heading);
    return headerContainer
}

const review = () => {
    const reviewOuter = document.createElement("div");
    reviewOuter.classList.add("review-outer");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = "Acerca de nosotros"
    p.textContent = "Somos un restaurante sonorense con presencia a nivel nacional, con un concepto moderno y juvenil que ofrece una experiencia única de sabor. Nos distinguimos por utilizar ingredientes de la más alta calidad, combinando el auténtico sabor de los quesos fundidos con el toque inconfundible de la tortilla de harina sobaquera, dando como resultado unas quesadillas irresistibles."
    reviewOuter.appendChild(h3);
    reviewOuter.appendChild(p);
    return reviewOuter;
}

const hours = () => {
    const info = document.createElement('div');
    info.classList.add('info-hours-outer');
    const h3 = document.createElement("h3");
    const p_1 = document.createElement("p");
    const p_2 = document.createElement("p");
    const p_3 = document.createElement("p");
    const p_4 = document.createElement("p");
    const p_5 = document.createElement("p");
    const p_6 = document.createElement("p");
    const p_7 = document.createElement("p");

    h3.textContent = "Horario";
    p_1.textContent = 'Domingo 1PM - 1AM';
    p_2.textContent = 'Lunes 1PM - 1AM';
    p_3.textContent = 'Martes 1PM - 1AM';
    p_4.textContent = 'Miercoles 1PM - 3AM';
    p_5.textContent = 'Jueves 1PM - 3AM';
    p_6.textContent = 'Viernes 1PM - 5AM';
    p_7.textContent = 'Sabado 1PM - 5AM';

    info.appendChild(h3);
    info.appendChild(p_1);
    info.appendChild(p_2);
    info.appendChild(p_3);
    info.appendChild(p_4);
    info.appendChild(p_5);
    info.appendChild(p_6);
    info.appendChild(p_7);

    return info;
}

const location = () => {
    const info = document.createElement("div");
    info.classList.add('info-location-outer');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = "Lugar";
    p.textContent = "Bulevar José Mario Lorelos 271, Loma Fea, 83423 Los Angeles, Son.";

    info.appendChild(h3);
    info.appendChild(p);
    return info;
}

const pageLoad = () =>{
    const mainContent = document.querySelector("div#content");
    const divElement = document.createElement("div");
    const headerElement = header();
    const reviewElement = review();
    const hoursElement = hours();
    const locationElement = location();
    divElement.classList.add("home");
    divElement.append(headerElement);
    divElement.append(reviewElement);
    divElement.append(hoursElement);
    divElement.append(locationElement);
    mainContent.append(divElement);
}


export {pageLoad}

/*
        <div class="header-container">
            <div class="heading">
                <h1>Le comide</h1>
            </div>
        </div>
        <div class="review-outer">
            <h3>Acerca de nosotros</h3>
            <p>Somos un restaurante sonorense con presencia a nivel nacional, con un concepto moderno y juvenil que ofrece una experiencia única de sabor. Nos distinguimos por utilizar ingredientes de la más alta calidad, combinando el auténtico sabor de los quesos fundidos con el toque inconfundible de la tortilla de harina sobaquera, dando como resultado unas quesadillas irresistibles.</p>
        </div>
        <div class="info-hours-outer">
            <h3>Horario</h3>
            <p>Domingo	1 PM-1 AM</p>
            <p>Lunes	1 PM-1 AM</p>
            <p>Martes	1 PM-1 AM</p>
            <p>Miercoles	1 PM-3 AM</p>
            <p>Jueves	1 PM-3 AM</p>
            <p>Viernes	1 PM-5 AM</p>
            <p>Sabado	1 PM-5 AM</p>
        </div>
        <div class="info-location-outer">
            <h3>Lugar</h3>
            <p>Bulevar José Mario Lorelos 271, Loma Linda, 83423 Los Angeles, Son.</p>
        </div>

        */