let form = document.querySelector(".form");
let table = document.querySelector("#tbody");
let contacts = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
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

        let newRow = document.createElement("tr");
        newRow.setAttribute("class", "bg-gray-100 border-b");

        for (let field in contact) {
            let newCell = document.createElement("td");
            newCell.setAttribute("class", "text-sm text-green-700 font-medium px-6 py-4 whitespace-nowrap");
            newCell.textContent = contact[field];
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);

        form.reset();
    }
});