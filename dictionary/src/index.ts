import validator from "validator";
import datos from '../data/db/datos.json' assert {type:'json'};
interface person {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phone: string;
}
let submit  = document.querySelector("#submit")
let contacts: person[] = [];
    if(submit){
        submit.addEventListener("click", function (ev) {
            ev.preventDefault();

            let firstName = document.querySelector("#name") as HTMLInputElement;
            let lastName = document.querySelector("#surname") as HTMLInputElement;
            let birthday = document.querySelector("#birthday") as HTMLInputElement;
            let gender = document.querySelector("#gender") as HTMLSelectElement;
            let email = document.querySelector("#email") as HTMLInputElement;
            let phone = document.querySelector("#phone") as HTMLInputElement;

            let errors: string[] = [];
            if (validator.isNumeric(firstName.value) || validator.isNumeric(lastName.value)) {
                errors.push('Nombre o Apellido inválido');
            }
            console.log(birthday.value)
            if (!validator.isDate(birthday.value)) {
                errors.push('Fecha de Nacimiento inválida');
            }

            if (!validator.isEmail(email.value)) {
                errors.push('Email inválido');
            }

            if (!validator.isMobilePhone(phone.value)) {
                errors.push('Número de Teléfono inválido');
            }
            contacts.forEach((contact) => {
                if (contact["email"] == email.value || contact["phone"] == phone.value) {
                    errors.push('Email o Número de Teléfono ya existen');
                }
            });

            if (errors.length > 0) {
                alert('Se encontraron errores: \n' + errors.join('\n'));
            } else {
                let contact:person = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    birthday: birthday.value,
                    gender: gender.value,
                    email: email.value,
                    phone: phone.value,
                };
                contacts.push(contact);

                let tbody = document.querySelector("#tbody") as HTMLTableSectionElement;

                for (let contact of contacts) {
                    let newRow = document.createElement("tr");
                    newRow.innerHTML = `<td>${contact.firstName}</td>`;
                    newRow.innerHTML += `<td>${contact.lastName}</td>`;
                    newRow.innerHTML += `<td>${contact.birthday}</td>`;
                    newRow.innerHTML += `<td>${contact.gender}</td>`;
                    newRow.innerHTML += `<td>${contact.email}</td>`;
                    newRow.innerHTML += `<td>${contact.phone}</td>`;
                    tbody.append(newRow);
                }
            }
        });
    }

