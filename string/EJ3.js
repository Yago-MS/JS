let str = "zZhOla";
let chars = [];
for (let i = 0; i < str.length; i++) {

    chars.push(String.fromCharCode((str.charCodeAt(i) === 90? 65: str.charCodeAt(i)+1)));
}
str = chars.join('');
console.log(str);
