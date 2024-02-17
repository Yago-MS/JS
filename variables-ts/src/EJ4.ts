function take(arg:number|string){

    if(typeof arg === "string"){
        console.log("this is a string")
    }else{
        console.log("this is a number")
    }
}

take(123);
take("hola")