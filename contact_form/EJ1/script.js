form.addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.querySelector("#name");
    let lastName = document.querySelector("#surname");
    let birthday = document.querySelector("#birthday");
    let gender = document.querySelector("#gender");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");

    let errors = [];

    if (validator.isNumeric(firstName.value) || validator.isNumeric(lastName.value)) {
        errors.push('Nombre o Apellido inválido');
    }

    if (!validator.isDate(birthday.value)) {
        errors.push('Fecha de Nacimiento inválida');
    }

    if (!validator.isEmail(email.value)) {
        errors.push('Email inválido');
    }

    if (!validator.isMobilePhone(phone.value)) {
        errors.push('Número de Teléfono inválido');
    }

    contacts.forEach(contact => {
        if (contact["email"] == email.value || contact["phone"] == phone.value) {
            errors.push('Email o Número de Teléfono ya existen');
        }
    });

    if (errors.length > 0) {
        alert('Se encontraron errores: \n' + errors.join('\n'));
    } else {
        let contact = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthday: birthday.value,
            gender: gender.value,
            email: email.value,
            phone: phone.value,
        };
        contacts.push(contact);
        let tbody = document.querySelector("#tbody")
        for (const contact of contacts) {
            //let
        }
    }

})