function displayDate(date = new Date(Date.now()), separator = "/") {
    console.log("first form: " + (date.getMonth() + 1) + separator + date.getDate() + separator + date.getFullYear());
}

let dateString = new Date('2023-10-18');
displayDate(dateString, "-");