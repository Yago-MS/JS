function formatTimeFromDate(inputDate) {

    const hours = String(inputDate.getHours()).padStart(2, "0");
    const minutes = String(inputDate.getMinutes()).padStart(2, "0");
    const seconds = String(inputDate.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}
const now = new Date();
const formattedTime = formatTimeFromDate(now);
console.log(formattedTime);
