let nums = [1, 2, 3, 4, 5, 6, 7];

let average = nums.reduce(
    (accumulator, currentValue) =>
        accumulator + currentValue);


console.log(average / nums.length);