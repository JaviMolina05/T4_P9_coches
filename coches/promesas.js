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

export function filtrar(cars, year, make, model, type) {
    return new Promise((resolve, reject) => {
        if (cars != null && cars != undefined) {
            const carsByYear = cars.filter(car => {
                return year === "ALL" ? car : car.year >= year;
            }); 
            const carsByMake = carsByYear.filter(car => {
                return make === "ALL" ? car : car.make === make;
            }); 
            const carsByModel = carsByMake.filter(car => {
                return model === "ALL" ? car : car.model === model;
            }); 
            const carsByType = carsByModel.filter(car => {
                return type === "ALL" ? car : car.type === type;
            }); 
            resolve(carsByType);
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