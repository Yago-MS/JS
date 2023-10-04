function add(a, b) {
    return a + b;
}
//arrow
let addArrow = (a, b) => a+b;
console.log(addArrow(1,2));


function multiply(x, y) {
    return x * y;
}
//arrow
let multiplyArow = (x,y) => x*y;
console.log(multiplyArow(2,2));
function greet(name) {
    return "Hello, " + name + "!";
}
//arrow
let greetArrow = (name) => `hello ${name} !`;
//arrow
console.log(greetArrow("Yago"));
function power(base, exponent) {
    return Math.pow(base, exponent);
}
//arrow
let powerArrow = (base, exponent) => Math.pow(base, exponent);
console.log(powerArrow(3,3));
function isEven(num) {
    return num % 2 === 0;
}
//arrow
let isEvenArrow = (num) => num%2==0;
console.log(isEvenArrow(2));
