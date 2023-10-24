function daysFrom15Sept(currentYear){
    let sept15 = new Date(currentYear, 8, 15 );
    let nowDate = new Date(currentYear, 0, 1);
    return (nowDate - sept15)/ (1000 * 60 * 60 * 24);
}
console.log(daysFrom15Sept(2023));