import './style.css';
import { Car } from "./car";
import { cars } from "./../mockData";
import * as promesas from "./promesas";

const title = "Coches desde 2010";
const strongText = ["Year: ", "Make: ", "Model: ", "Type: "];
const arraySelect = [
    [... new Set(cars.map(elemento => elemento.year))],
    [... new Set(cars.map(elemento => elemento.make))],
    [... new Set(cars.map(elemento => elemento.model))],
    [... new Set(cars.map(elemento => elemento.type))]
];
// Creación de elementos
let body = document.querySelector("body");
let h1 = document.createElement("h1");
let divContainer = document.createElement("div");
divContainer.className = "container";
let divFilters = document.createElement("div");
divFilters.className = "filters";
let span1 = document.createElement("div");
let divBlock = document.createElement("div");
divBlock.className = "block";

// Añadir elementos al DOM
h1.textContent = title;
body.appendChild(divContainer);
divContainer.appendChild(h1);
strongText.forEach((elemento, index) => {
    let span = document.createElement("span");
    let select = document.createElement("select");
    let strong = document.createElement("strong");
    strong.textContent = elemento;
    let optionAll = document.createElement("option");
    optionAll.textContent = "ALL"
    arraySelect[index].forEach(index => {
        let option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = index;
        select.appendChild(optionAll);
        select.appendChild(option);
        
    });
    divFilters.appendChild(span);
    divFilters.appendChild(select);
    span.appendChild(strong);
})


divContainer.appendChild(divFilters);
async function promesa(car, year, make, model, type) {
    try {
        divBlock.textContent = "";
        const mapeados = await promesas.mapeo(car); // Mapear objetos Car
        const filtrados = await promesas.filtrar(mapeados, year, make, model, type);
        const divs = await promesas.divs(filtrados); // Crear divs con la información
        // Añadir cada div al bloque
        divs.forEach(div => divBlock.appendChild(div));
        divContainer.appendChild(divBlock);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Promesas
let selectFiltros = document.querySelectorAll("select");
selectFiltros.forEach(elemento => {
    elemento.addEventListener("change", (e) => {
        promesa(cars, 
            selectFiltros[0].value, 
            selectFiltros[1].value, 
            selectFiltros[2].value, 
            selectFiltros[3].value
        );
    });
});
promesa(cars, "ALL", "ALL", "ALL", "ALL");


