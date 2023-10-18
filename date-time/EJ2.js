function displayDate(date = new Date(Date.now()), separator = "/") {
    console.log("first form: " + (date.getMonth() + 1) + separator + date.getDate() + separator + date.getFullYear());
}

let dateString = new Date('1995-12-17');
displayDate(dateString, "-");