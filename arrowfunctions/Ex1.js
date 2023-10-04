let names  = ["jose", "vane", "yago"];

let greet = (names) => {
    names.forEach((i) => console.log(`greetings ${i}!`))
}

console.log(greet(names));