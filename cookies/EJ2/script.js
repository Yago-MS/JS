document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("cookieSetter");
    if (localStorage.getItem("name") == null) {
        form.innerHTML = `<label>Nombre</label><br>
                          <input type="text" id="cookieValue"><br>
                          <button id="submit">listo</button>`;

        let button = document.getElementById("submit")

        button.addEventListener("click", function () {
            let cookieValue = document.getElementById("cookieValue").value;
            localStorage.setItem("name", cookieValue);
            alert(`Hola, ${localStorage.getItem("name")}`)
            form.innerHTML = `<p>Username: ${localStorage.getItem("name")}</p>`;
        })
    } else {
        alert(`Bienvenido de nuevo, ${localStorage.getItem("name")}!`)
        form.innerHTML = `<p>Username: ${localStorage.getItem("name")}</p>`;
    }
})


