let array1 = [1,2,3];
let array2 = [1,2,3];

function comprobarIguales(arr1,arr2){
    return arr1.every((element, index) => element===arr2[index])


}


console.log(comprobarIguales(array1,array2));