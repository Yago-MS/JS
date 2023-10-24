function MondaysOnSeptember15() {
    const currentYear = new Date().getFullYear();
    const endYear = 2100;

    const yearsWithMondays = [];

    for (let year = currentYear; year <= endYear; year++) {
        const date = new Date(year, 11, 9);
        if (date.getDay() === 6) {
            yearsWithMondays.push(year);
        }
    }

    return yearsWithMondays;
}

const yearsWithMondays = MondaysOnSeptember15();
console.log("Years in which September 15 is a Monday:", yearsWithMondays);
