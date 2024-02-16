document.addEventListener("DOMContentLoaded", () => {
    let info = document.getElementById("info");
    info.innerHTML += "screen height: " + screen.height + "<br>";
    info.innerHTML += "available height: " + screen.availHeight + "<br>";
    info.innerHTML += "screen width: " + screen.width + "<br>";
    info.innerHTML += "available width: " + screen.availHeight + "<br>";
    info.innerHTML += "color depth: " + screen.colorDepth + "<br>";
    info.innerHTML += "pixel depth: " + screen.pixelDepth + "<br>";
})