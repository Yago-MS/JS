function swapcase(text){
    let split = text.split("");
    for (let i = 0; i < text.length; i++) {
        if(split[i]===split[i].toUpperCase()){
            split[i]= split[i].toLowerCase();
        }else{
            split[i]= split[i].toUpperCase();
        }
    }
    return split.join("")
}

console.log(swapcase("AaAbBbCcC"))