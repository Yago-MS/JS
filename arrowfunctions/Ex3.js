let nums = [-1,2,-3,-4,5,-6,7];

let numPos = [];
//A
numPos = nums.filter(g=>g>=0);

console.log(numPos.toString());
//B

let pos = (nums) => {

    return nums.filter(g => g>=0);
}

numPos = pos(nums);
console.log(numPos.toString());
