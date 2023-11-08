let array1 = [[1, 2, 3], [1, 2, 3]];
let array2 = [];

for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i])
}

array2[0][0] = 123;

console.log(array1)
console.log(array2)