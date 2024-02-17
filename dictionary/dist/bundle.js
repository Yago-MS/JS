/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nvar submit = document.querySelector(\"#submit\");\nvar contacts = [];\nif (submit) {\n    submit.addEventListener(\"click\", function (ev) {\n        ev.preventDefault();\n        var firstName = document.querySelector(\"#name\");\n        var lastName = document.querySelector(\"#surname\");\n        var birthday = document.querySelector(\"#birthday\");\n        var gender = document.querySelector(\"#gender\");\n        var email = document.querySelector(\"#email\");\n        var phone = document.querySelector(\"#phone\");\n        var errors = [];\n        console.log(\"esto si\");\n        contacts.forEach(function (contact) {\n            if (contact[\"email\"] == email.value || contact[\"phone\"] == phone.value) {\n                errors.push('Email o Número de Teléfono ya existen');\n            }\n            console.log(\"funca\");\n        });\n        if (errors.length > 0) {\n            alert('Se encontraron errores: \\n' + errors.join('\\n'));\n        }\n        else {\n            var contact = {\n                firstName: firstName.value,\n                lastName: lastName.value,\n                birthday: birthday.value,\n                gender: gender.value,\n                email: email.value,\n                phone: phone.value,\n            };\n            contacts.push(contact);\n            var tbody = document.querySelector(\"#tbody\");\n            for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {\n                var contact_1 = contacts_1[_i];\n                var newRow = document.createElement(\"tr\");\n                newRow.innerHTML = \"<td>\".concat(contact_1.firstName, \"</td>\");\n                newRow.innerHTML += \"<td>\".concat(contact_1.lastName, \"</td>\");\n                newRow.innerHTML += \"<td>\".concat(contact_1.birthday, \"</td>\");\n                newRow.innerHTML += \"<td>\".concat(contact_1.gender, \"</td>\");\n                newRow.innerHTML += \"<td>\".concat(contact_1.email, \"</td>\");\n                newRow.innerHTML += \"<td>\".concat(contact_1.phone, \"</td>\");\n                tbody.append(newRow);\n            }\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dictionary/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;