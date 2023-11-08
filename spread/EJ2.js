function collector(...args) {
    let total = 0;
    console.log(`there are ${args.length} arguments`)
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "number") {
            total += args[i];
        }
    }
    console.log(`the sum of the numbers is ${total}`)
}

collector(1, 4, "5");