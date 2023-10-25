function sumOddNumbers(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i] % 2 === 0 ? args[i] : 0;
    }
    return total;
}

console.log(sumOddNumbers(1, 2, 3, 4, 5, 6));