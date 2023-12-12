document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("contextmenu", function(ev){
        ev.preventDefault()
        alert("there is no context menu")
    })

});