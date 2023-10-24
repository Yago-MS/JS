function whatDayWas(days) {
    let milisecDays = days * 24 * 60 * 60 * 1000;
    let currentDate = new Date(Date.now() - milisecDays);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();

    return year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
}

console.log(whatDayWas(10));
