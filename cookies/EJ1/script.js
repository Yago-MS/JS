import * as docCookies from "../lib/cookies.js"
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("cookieSetter");
    if(!docCookies.docCookies.getItem("name")){
        form.innerHTML = `<label>Nombre</label><br>
                          <input type="text" id="cookieValue"><br>
                          <button id="submit">listo</button>`;

    let button = document.getElementById("submit")

    button.addEventListener("click", function () {
        let cookieValue = document.getElementById("cookieValue").value;
        docCookies.docCookies.setItem("name", cookieValue, 10);
        alert(`Hola, ${docCookies.docCookies.getItem("name")}`)
        form.innerHTML = `<p>Username: ${docCookies.docCookies.getItem("name")}</p>`;
    })
    }else{
        alert(`Bienvenido de nuevo, ${docCookies.docCookies.getItem("name")}!`)
        form.innerHTML = `<p>Username: ${docCookies.docCookies.getItem("name")}</p>`;
    }
    setInterval(function (){
        if(docCookies.docCookies.getItem("name")) {
            let confirm = window.confirm("sigues ahí?");
            if (confirm) {
                docCookies.docCookies.setItem("name", docCookies.docCookies.getItem("name"), 10);
            } else {
                docCookies.docCookies.removeItem("name");
                window.location.reload();
            }
        }
    }, 5000)
})


