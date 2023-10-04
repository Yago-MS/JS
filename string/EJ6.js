function protect_email(email){
    let split = email.split("@")
    let name = split[0].substr(0, 3);
    return name + "...@" + split[1];
}

console.log(protect_email("yagomoralessilva9@gmail.com"))