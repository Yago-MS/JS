let str = "HolaZ";
let chars = [];
for (let i = 0; i < str.length; i++) {

    if(str.charCodeAt(i)!==122){
    chars.push(String.fromCharCode((str.charCodeAt(i) === 90? 65: str.charCodeAt(i)+1)));
    }else{
    chars.push(String.fromCharCode((97)))
    }
}
str = chars.join('');
console.log(str);
