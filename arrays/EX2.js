function sortBySurname(nombres) {
    nombres.sort((a, b) => {
        let wordsA = a.split(" ");
        let wordsB = b.split(" ");
        let surnameA = wordsA[1];
        let surnameB = wordsB[1];

        return surnameA.localeCompare(surnameB);
    });
}


var Students = ["Yago Morales Silva", "Alejandro Jimenez", "Miguel Acedo"];

sortBySurname(Students);

console.log(Students);
