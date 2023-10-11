function abbrev_name(name_surname){
    let name = name_surname.split(" ");
    name[1] = name[1].charAt(0);
    return name[0] + " " + name[1]+ ".";
}

function abbrev_name2(name_surname){
    let name = name_surname.split(" ");
    nameAbrev = name[0] +" ";

    for (let i = 1; i < name.length; i++) {
        nameAbrev += name[i].charAt(0) + ". ";
    }
    return nameAbrev;
}
console.log(abbrev_name("Yago Morales"));
console.log(abbrev_name2("Yago Morales Silva"));