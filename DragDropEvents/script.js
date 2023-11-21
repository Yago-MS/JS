document.addEventListener('DOMContentLoaded', function () {
    let trash = document.getElementById("papelera");

    trash.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    trash.addEventListener("drop", function () {
        document.getElementById("papel").remove();
        trash.setAttribute("src", "imgs/papeleraLlena.png"); // Añade la extensión del archivo si es necesario
    });
});
