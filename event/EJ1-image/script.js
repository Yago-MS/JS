let image = document.getElementById("image")
document.addEventListener("keydown", function (event) {
    if(event.key==="ArrowUp"){
        image.width += (image.width*0.1);
        image.height += (image.height*0.1);
        console.log(image.width)
    }else if(event.key==="ArrowDown"){
        image.width -= (image.width*0.1);
        image.height -= (image.height*0.1);
    }

    if(image.width>1000){
        console.log("entra")
        //image.remove();

    }
});
