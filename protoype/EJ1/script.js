String.prototype.toString = function (number) {
    let string = "";
    if (!isNaN(number) && number > 0) {
        for (let i = 1; i <= number; i++) {
            string += this
        }
    } else {
        string = "Introduce un valor válido"
    }
    return string;
}

console.log("hello there ".toString(2))