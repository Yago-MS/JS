function currentDayAndTime(){
    let date = new Date(Date.now())
    let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let weekDay = daysOfWeek[date.getDay()] + ". "
    let hour;
    if (date.getHours()>=12){
        hour = date.getHours()-12 + "PM ";
    }else{
        hour = date.getHours() + "AM ";
    }
    hour += date.getMinutes()+":"+date.getSeconds();

    return weekDay + "Now: " + hour;
}
console.log(currentDayAndTime())