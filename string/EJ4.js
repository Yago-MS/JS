function truncate_string(name, limit){
    let cut = "";
    for (let i = 0; i < limit; i++) {
        cut += name.charAt(i);
    }
    return cut;
}

console.log(truncate_string("Yago Morales Silva", 3))