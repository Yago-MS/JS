document.addEventListener("DOMContentLoaded", function(){
    let input = document.getElementById("input");
    document.addEventListener("keydown", function (key){
        if(isNaN(parseInt(key.key))&&key.key!=="Backspace"&&key.key!=="Delete"){
           key.preventDefault()
        }
    })
})