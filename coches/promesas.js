import { Car } from "./car";
export function mapeo(cars) {
    return new Promise((resolve, reject) => {
        if (cars != null) {
            const arrayCar = cars.map(elemento => {
                const newCar = new Car(elemento.id, elemento.make);
                newCar.model = elemento.model;
                newCar.type = elemento.type;
                newCar.year = elemento.year;
                return newCar;
            })
            resolve(arrayCar);
        } else {
            reject("Array nulo");
        }
    });
};

export function filtrar(cars, option) {
    return new Promise((resolve, reject) => {
        if (cars != null) {
            const arrayCar = cars.filter(elemento => {
                elemento.year = option;
                elemento.make = option;
                elemento.model = option;
                elemento.type = option;
            }); // Retornar la condición explícitamente
            resolve(arrayCar);
        } else {
            reject("Array nulo");
        }
    });
};

export function divs(cars) {
    return new Promise((resolve, reject) => {
        if (cars != null) {
            const arrayCar = cars.map(elemento => {
                let div = document.createElement("div");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                p1.textContent = "Model: " + elemento.model + ",Make: " + elemento.make;
                p2.textContent = "Type: " + elemento.type + ",Year: " + elemento.year;
                div.appendChild(p1);
                div.appendChild(p2);
                return div;
            });
            resolve(arrayCar);
        } else {
            reject("Array nulo");
        }
    });
};