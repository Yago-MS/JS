function combine(arg1:boolean,arg2: number){
    let arg3:boolean|number;
    if(arg1){
        arg3 = arg2;
    }else{
        arg3 = arg1;
    }
    return arg3;
}

console.log(combine(false,23))
console.log(combine(true,23));