document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("input");
    function camelize(text){
        let split = text.split("")
        for (let i = 1; i < text.length; i++) {
            split[0] = split[0].toLowerCase();
            if(split[i-1]===" "){
                split[i] = split[i].toUpperCase();
                split[i-1] = "";
            }
        }
        return split.join("")
    }
    input.addEventListener("change", function (input){
            input.target.value = camelize(input.target.value)
    })

});