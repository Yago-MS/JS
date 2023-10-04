function capitalize_Words(text){
    let split = text.split("");
    for (let i = 1; i < text.length; i++) {
        split[0] = split[0].toUpperCase();
        if(split[i-1]===" "){
            split[i] = split[i].toUpperCase();
        }
    }
    return split.join('');
}

console.log(capitalize_Words("yago morales silva"))