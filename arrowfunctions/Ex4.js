let nums = [1,2,3,4,5,6,7];

const initialValue=0;

const average = nums.reduce(
    (accumulator, currentValue)=> accumulator + currentValue, initialValue);


console.log(average/nums.length);