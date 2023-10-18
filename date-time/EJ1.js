function getDayOfWeek(dateString) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date(dateString);

    return daysOfWeek[date.getUTCDay()];
}
const dayOfWeek = getDayOfWeek(Date.now());
console.log(`El día de la semana correspondiente a hoy es: ${dayOfWeek}`);


