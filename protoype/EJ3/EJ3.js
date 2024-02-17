Date.prototype.toString = function (){
    let split = this.toDateString().split(" ");
    let string = ""
    string += "Day: " + split[2]+"\n";
    string += "Month: " + split[1]+"\n";
    string += "WeekDay: " + split[0] + "day\n";
    string += "Year: " + split[3] + "\n";
    return string;
}
let date = new Date();


console.log(date.toString())