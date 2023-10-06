function truncate_string(name, limit){
    let cut = name.split("");
    return cut.filter((x,y) => y<limit).join('');
}

console.log(truncate_string("Yago Morales Silva", 5))

