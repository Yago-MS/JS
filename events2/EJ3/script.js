document.addEventListener('DOMContentLoaded', function () {
    let numberInput = document.getElementById("numberInput");

    numberInput.addEventListener("input", function (event) {
        let inputValue = event.target.value;

        let numericValue = inputValue.replace(/\D/g, '');//expresion regular que simboliza los valores no numéricos

        numberInput.value = numericValue;
    });
});