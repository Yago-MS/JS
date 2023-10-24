let array1 = [1,2,2,3,2];

function noDuplicates(array){
    let noDup = [];
    for (let i = 0; i <array.length; i++) {
        if(noDup.indexOf(array[i])<0){
            noDup.push(array[i]);
        }
    }
    return noDup;
}

array1 = noDuplicates(array1);

console.log(array1)