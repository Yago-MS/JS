function MondaysOnSeptember15() {
    const currentYear = new Date().getFullYear();
    const endYear = 2070;

    const yearsWithMondays = [];

    for (let year = currentYear; year <= endYear; year++) {
        const date = new Date(year, 8, 15);
        if (date.getDay() === 1) {
            yearsWithMondays.push(year);
        }
    }

    return yearsWithMondays;
}

const yearsWithMondays = MondaysOnSeptember15();
console.log("Years in which September 15 is a Monday:", yearsWithMondays);
