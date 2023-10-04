function string_parametrize(text){
    let split = text.split("")
    for (let i = 0; i < text.length; i++) {
        if(split[i]===" "){
            split[i] = "-"
        }else if(split[i] === split[i].toUpperCase()){
            split[i] = split[i].toLowerCase();
        }
    }
    return split.join('');
}

console.log(string_parametrize("Yago Morales Silva"));