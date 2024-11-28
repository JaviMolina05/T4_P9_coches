export class Car {
    #id;
    model;
    make;
    type;
    year;
    constructor(id, make) {
        this.#id = id;
        this.make = make;
    }

    get model(){
        return this.model;
    }
    set model(model){
        this.model = model;
    }

    get make(){
        return this.make;
    }
    set make(make){
        this.make = make;
    }

    get type(){
        return this.type;
    }
    set type(type){
        this.type = type;
    }

    get year(){
        return this.year;
    }
    set year(year){
        this.year = year;
    }
}