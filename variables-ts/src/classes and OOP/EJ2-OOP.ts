class BusClass2 {
    make:string;
    model:string
    year:number;

    constructor(make:string, model:string, year:number) {
        this.model = model;
        this.year = year;
        this.make = make;
    }
    start(){
        console.log("the bus: " + this.model + " from year: " + this.year + " model: " + this.model + " is starting!")
    }
}


let myBus2 = new BusClass2("renault", "vista", 2024);

console.log(myBus2)
myBus2.start();