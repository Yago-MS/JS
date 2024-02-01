let result: number | string | boolean;

function showType(myVar: number | boolean | string) {
    console.log(typeof myVar);
}

result = 1;
showType(result);
result = "hola";
showType(result);
result = true;
showType(result);