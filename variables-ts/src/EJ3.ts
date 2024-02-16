interface Car {
    make:string;
    model:string;
}
type Bus = {
    make:string;
    model:string;
    payloadCapacity:number;
}

type vehicle = Car|Bus;

let car : Car = {make: "honda", model:"civic"}
let bus : Bus = {make:"renault", model:"vista", payloadCapacity:23}

let vehicles : vehicle[] = [car, bus];

vehicles.forEach((v)=>{
    console.log(v);
})