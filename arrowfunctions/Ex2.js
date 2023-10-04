let nums = [1,2,3,4,5,6,7];

let numSquare = nums
//A
/*for (let i = 0; i < nums.length; i++) {
    numSquare[i] = Math.pow(nums[i], 2);
}
console.log(numSquare.toString());*/
//B
let square = (nums) => {

   return nums.map(g => Math.pow(g,2));
}

numSquare = square(nums);
console.log(numSquare.toString());