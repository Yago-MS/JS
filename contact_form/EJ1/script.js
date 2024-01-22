document.addEventListener("DOMContentLoaded", function () {
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let dp = new AirDatepicker("#birthday");
    let gender = document.querySelector("#gender");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let button = document.querySelector("#submit")
    console.log(button);
    let contactBook = {
        contacts: [
            {}
        ]
    };
    button.addEventListener("click", function () {
        if(!validator.isEmpty(dp.$el.value)){
            let date = dp.$el.value.split(".");
            console.log(dp.formatDate(new Date(2024, 10, 31), "yyyy/mm/dd"));
            console.log(dp.formatDate(new Date(parseInt(date[2]), parseInt(date[1]) -1 , parseInt(date[0])), "yyyy/mm/dd"))
            if (!validator.isEmpty(name.value) &&
                !validator.isEmpty(surname.value) &&
                validator.isDate(dp.formatDate(new Date(), "yyyy/mm/dd")) &&
                !validator.isEmpty(gender.value) &&
                validator.isEmail(email.value) &&
                validator.isMobilePhone(phone.value)) {
                console.log("todo cool")
            }
        }


    })
})