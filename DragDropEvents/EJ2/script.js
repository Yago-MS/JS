function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let imagen = new Image();
    imagen.setAttribute("width", "100px");
    imagen.setAttribute("height", "100px")
    imagen.src = ev.dataTransfer.getData("text");
    
    document.getElementById("lista").appendChild(imagen);


    
    
}