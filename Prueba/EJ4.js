function recursive(num){
    console.log("recursive function nº" + num);
    if (num<5){
        num++;
        recursive(num);
    }
}
let num = 1;
recursive(num);