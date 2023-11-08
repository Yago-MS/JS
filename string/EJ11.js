function uncamelize(text, separator = " "){
    let split = text.split("");
    let aux, aux2;
    for (let i = 0; i < text.length; i++) {

        if(split[i]===split[i].toUpperCase()){
            split.push("");
            aux = split[i].toLowerCase();
            split[i] = separator;
            for (let j = i+1; j < split.length; j++) {
                aux2 = aux;
                aux = split[j];
                split[j] = aux2;
            }

        }
    }
    return split.join("")
}

console.log(uncamelize("helloWorld" , "-"))