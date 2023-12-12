document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("input");

    document.addEventListener("keydown", function(){
        input.value = input.value.toUpperCase();
    })

});