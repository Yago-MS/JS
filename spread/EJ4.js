function mergeArray(array1,array2){
    return [...array1, ...array2];
}

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let array3 = mergeArray(array1,array2);

console.log(array3);
