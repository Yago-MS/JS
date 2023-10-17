function daysOfSchool() {
    let currDate = new Date();
    let endOfTerm = new Date("2023-12-22");
    let oneDay = 24 * 60 * 60 * 1000;
    let days = 0;

    while (currDate.getTime() <= endOfTerm.getTime()) {
        if (currDate.getDay() !== 6 && currDate.getDay() !== 0) {
            days++;
        }
        currDate = new Date(currDate.getTime() + oneDay);
    }

    return days;
}

console.log(daysOfSchool());

