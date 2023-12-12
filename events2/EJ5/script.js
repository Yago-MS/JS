document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("input");

    input.addEventListener("input", function (input){
        input.target.value = input.target.value.toUpperCase()
    })

});