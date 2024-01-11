let birthday = new AirDatepicker("#birthday",{
    locale:exports.default,
    dateFormat:'yyyy/MM/dd'
}); 
document.querySelector("#submit").addEventListener("click", function () {
    let firstName = document.querySelector("#name");
    let lastName = document.querySelector("#surname");
    let gender = document.querySelector("#gender");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    console.log("funciona")

    let errors = [];

    if (validator.isNumeric(firstName.value) || validator.isNumeric(lastName.value)) {
        errors.push('Nombre o Apellido inválido');
    }
    console.log(birthday.$el.value)
    if (!validator.isDate(birthday.$el.value)) {
        errors.push('Fecha de Nacimiento inválida');
    }

    if (!validator.isEmail(email.value)) {
        errors.push('Email inválido');
    }

    if (!validator.isMobilePhone(phone.value)) {
        errors.push('Número de Teléfono inválido');
    }
    let contacts = [];

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
            birthday: birthday.$el.value,
            gender: gender.value,
            email: email.value,
            phone: phone.value,
        };
        contacts.push(contact);
        let tbody = document.querySelector("#tbody")
        for (const contact of contacts) {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${contact.firstName}</td>`
            newRow.innerHTML += `<td>${contact.lastName}</td>`
            newRow.innerHTML += `<td>${contact.birthday}</td>`
            newRow.innerHTML += `<td>${contact.gender}</td>`
            newRow.innerHTML += `<td>${contact.email}</td>`
            newRow.innerHTML += `<td>${contact.phone}</td>`
            tbody.append(newRow);
        }
    }

})