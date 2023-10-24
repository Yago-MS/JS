function formatTimeFromDate(inputDate) {

    let hours = String(inputDate.getHours()).padStart(2, "0");
    let minutes = String(inputDate.getMinutes()).padStart(2, "0");
    let seconds = String(inputDate.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}
let now = new Date();
let formattedTime = formatTimeFromDate(now);
console.log(formattedTime);
