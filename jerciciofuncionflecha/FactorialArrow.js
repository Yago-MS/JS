function factorial(num) {
    if (num != 1) {
        return factorial(num - 1) * num;
    } else {
        return 1;
    }
}

let factorial2 = (num) => num = num != 1 ? factorial2(num - 1) * num : 1;
let factorial3 = (num) => {
    if (num != 1) {
        return factorial3(num - 1) * num;
    } else {
        return 1;
    }
}
console.log(factorial(3));
console.log(factorial2(4));
console.log(factorial3(5));