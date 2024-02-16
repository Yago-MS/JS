Object.prototype.toString = function ( nivel = 0) {
    let string = "";
    let obj = this;

    for (const objKey in obj) {
        if (typeof obj[objKey] !== "object") {
            string += "*" + obj[objKey] + "*\n"
        } else {
            for (let i = 0;i<=nivel;i++){
                string += "-"
            }
            string += obj[objKey].toString(nivel+1);
        }
    }
    return string;
}


let data = {
    name: "Jon",
    surname: "Doe",
    city: "Málaga",
    child: {
        first: "you",
        child: {
            name: "Jane",
            child: {
                name: "Paul"
            }
        }
    },
    position: "CEO",
};

console.log(data.toString());