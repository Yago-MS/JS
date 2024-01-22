document.addEventListener("DOMContentLoaded", () =>{
    let info = document.getElementById("info");
    info.innerHTML += "cookies enabled: " + navigator.cookieEnabled + "<br>";
    info.innerHTML += "language: " + navigator.language + "<br>";
    info.innerHTML += "online: " + navigator.onLine + "<br>";
    info.innerHTML += "PDFViewer: " + navigator.pdfViewerEnabled + "<br>";
})