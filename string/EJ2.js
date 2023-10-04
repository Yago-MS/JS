let sendMail = (name, age, comment) =>{
        let status = `${name} is a valid user`;

        age >= 18? status = status: status = "not a valid user";

    if(typeof name === "string"&& typeof age === "number"&& typeof comment === "string") {
        return`//=> A user posted a comment from the website 
//=> name: ${name} 
//=> age: ${age} 
//=> status : ${status}
//=> comments ${comment}`;
    }else{
        return null;
    }
}

console.log(sendMail("Yago", 18, "nice website!"));
