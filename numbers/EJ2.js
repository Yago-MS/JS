function random1(){
     console.log(Math.random());

}
function random2(num1,num2){
    console.log(parseInt((Math.random() * num2) + num1));
}

random1();
random2(1,5)