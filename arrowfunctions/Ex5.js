let nums = [1,2,3,4,5,6,7];

let greatest = nums.reduce((max, num) => {
    if(num>max){
    max = num
    } else{
        max
    }
    return max;
});
console.log(greatest);