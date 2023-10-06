function abbrev_name(name_surname){
    let name = name_surname.split(" ");
    name[1] = name[1].charAt(0);
    return name[0] + " " + name[1]+ ".";
}

console.log(abbrev_name("Yago Morales"));