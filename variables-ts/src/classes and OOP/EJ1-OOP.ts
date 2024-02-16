class BusClass {
    make:string;
    model:string
    year:number;

    constructor(make:string, model:string, year:number) {
    this.model = model;
    this.year = year;
    this.make = make;
    }
}

let myBus = new BusClass("renault", "vista", 2024);

console.log(myBus)