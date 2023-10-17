function daysFrom15Sept(){
    let sept15 = new Date("2023-9-15")
    let nowDate = new Date(Date.now())
    return (nowDate - sept15)/ (1000 * 60 * 60 * 24);
}
console.log(daysFrom15Sept())