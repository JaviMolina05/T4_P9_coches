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
strongText.forEach(elemento => {
    let span = document.createElement("span");
    let select = document.createElement("select");
    let strong = document.createElement("strong");
    strong.textContent = elemento;
    arraySelect.forEach(elemento => {
        elemento.forEach(elemento2 => {
            let option = document.createElement("option");
            option.setAttribute("value", elemento2);
            option.textContent = elemento2;
            select.appendChild(option);
            option.addEventListener("click", () => {
                
                    option.addEventListener("click", () => {
                        async function filtrar(opcion) {
                            const filtrados = await promesas.filtrar(cars); // Filtrar por año >= 2010
                        }
                        filtrar(option);
                    })
                
            })
        })
    });
    divFilters.appendChild(span);
    divFilters.appendChild(select);
    span.appendChild(strong);
})


divContainer.appendChild(divFilters);
divContainer.appendChild(divBlock);
// Promesas
async function promesa() {
    try {
        const mapeados = await promesas.mapeo(cars); // Mapear objetos Car
        const divs = await promesas.divs(mapeados); // Crear divs con la información

        // Añadir cada div al bloque
        divs.forEach(div => divBlock.appendChild(div));
    } catch (error) {
        console.error("Error:", error);
    }
}
promesa();
