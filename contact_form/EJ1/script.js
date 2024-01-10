document.addEventListener("DOMContentLoaded", function () {
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let birthday = document.querySelector("#birthday");
    let gender = document.querySelector("#gender");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let button = document.querySelector("#submit")
    console.log(button);
    let contactBook = { contacts:[
            {name:"testName", surname:"testLastname",birthday:"testBirthday",gender:"testGender",email:"testEmail",phone:"testPhoneNumber"}
        ]};
    button.addEventListener("click", function (){
        let everythingOk = true;
        everythingOk = !validator.isEmpty("#name");
        everythingOk = !validator.isEmpty("#surname");
        everythingOk = validator.isDate("#birthday");
        everythingOk = !validator.isEmpty("#gender");
        everythingOk = validator.isEmail("#email");
        everythingOk = validator.isMobilePhone("#phone");
        if(everythingOk){
            console.log("DE LOCOOOOOS")
        }else {
            console.log("nop")
        }
    })
})