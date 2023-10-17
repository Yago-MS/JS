//ejemplo de concatenación
/*let name = "Yago";
let greeting = `hello ${name}`;
console.log(greeting);*/

//ejemplo de lambda
/*let a = 1;
let b = 2;
const n2 = (a,b) => a + b;
console.log(n2(a,b));*/

//parse int
/*console.log(parseInt(10.3));
console.log(parseInt("1",16));
console.log(parseInt(10,8));*/

//ejemplo undefined
/*let num;
console.log(num);*/

//ejemplo loose equality
/*let num1= 100;
let num2 = "100";
console.log(num1==num2);
let a = true;
let b = "true";
console.log(a==b);*/

//ejemplo time
/*let today = new Date();
console.log(today.getTime());*/

//ejemplo bloque de codigo en string
//console.log(`1 + 2 = ${1+2}`);

//ejemplo string distintas lineas
//console.log("Hola\nYago");

//Ejemplo variable tipo funcion
/*
function sum (a,b){
    return a+b;
}
console.log(sum(1,2));
let sun=(a,b) =>{
    return a+b;
};
console.log(typeof sum);
*/

//funcion flecha
/*let newOne = (name) => console.log("Hello " + name);

newOne("Kay");*/
//breve explicacion, si nuestra funcion flecha solo tiene una linea es posible omitir los paréntesis

//diferencias entre usar llaves y no usarlas
/*let plus3 = n => n+3;
console.log("primero ", plus3(1));

let plus3Key = n => {
    return n+3
};
console.log("segundo ", plus3Key(1));*/
//breve explicacion, si usamos las llaves será necesario utilizar un "return" para que nuestra funcion devuelva el dato

//ejemplo funcion .map
let grades = [1,5,3,10];//esto se usara en todos los ejemplos

console.log(grades.map(g=>g+2));
console.log(grades);

//ejemplo .filter
// console.log(grades.filter(g => g>2));

//ejemplo find
// console.log(grades.find(g => g==5));

//ejemplo findIndex
// console.log(grades.findIndex(g=> g==1));

//Ejemplo reduce

/*const  initialValue =0;
const sumWithInitial =
    grades.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue);
console.log(sumWithInitial/grades.length);*/

//ejemplo de Strings are inmutable
/*
let str = 'hi';
console.log(str[0]);

//str[0] = h; esto no funcionará
console.log(str[0]);

str = 'H' + str[1];  //esto si, pero es un poco complicado
console.log(str);
*/
/*function logArrayElement(element){
    console.log(element);
}

[2,5,,9].forEach(e=>logArrayElement(e));

[2,5,,9].forEach(e=>logArrayElement(e));

logArrayElements("bye", "hello","hey"); //solo mostrará el primer elemento

function logArrayElements(element, index) {
    console.log("index: " + index + " element: " + element);

}
[2,5,,9].forEach((e,i)=>logArrayElements(e,i));*/

/*console.log(grades.shift());
console.log(grades);
console.log(grades.unshift(4, 6, 8));
console.log(grades);*/

/*console.log(grades.pop());
console.log(grades);
console.log(grades.push(10));
console.log(grades);*/


/*
let str1 = "Yago Morales";

let listchar = str1.split("");

let listUpper = listchar.map(c=> c.toUpperCase());

console.log(listUpper);
let str3 = str1.split("")
    .map(c=> c.toUpperCase())
    .join('');
//let str2 = listUpper.join()
console.log(str3);*/

/*
let sumElements = (...arr) =>{
    let sum = arr.reduce((accE, currE) => accE+currE);
    console.log(sum);
}

sumElements(  );*/

//default parameters

let f = (a)=>{
    if(a===undefined || a === null){

    }
}