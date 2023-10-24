function convertMsToHHMMSS(ms){
    let seconds = Math.floor(ms / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    seconds = seconds % 60
    minutes = minutes % 60
    hours = hours % 24

    return `${hours}:${minutes}:${seconds}`
}

function timer(nowTime,hours=0, minutes=0, seconds=0){
    let totalTime = (((hours*60 + minutes)*60)+seconds)*1000;
    let timeAt = new Date(nowTime.getTime() + totalTime);
    nowTime = new Date();
    let timeUntil = timeAt - nowTime;

    return convertMsToHHMMSS(timeUntil)

}

const date = new Date();
setInterval(() => {
    console.log(timer(date, 0,0,4));
    setTimeout(() => {
        console.clear();
    }, 1000);
}, 1000);


