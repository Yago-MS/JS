document.addEventListener("DOMContentLoaded", () => {
    let myWindow;
    document.getElementById("newWind").addEventListener("click", (ev) => {
        ev.preventDefault();
        if (myWindow) {
            myWindow.close();
        }
        myWindow = window.open("./window.html", "", "popup")
    });
    document.getElementById("checkWind").addEventListener("click", (ev) => {
        ev.preventDefault();
        if (myWindow) {
            if (!myWindow.closed) {
                console.log("exists")
            } else {
                console.log("no extra windows")
            }
        } else {
            console.log("no extra windows")
        }
    });

    document.getElementById("moveBy").addEventListener("click", (ev)=>{
        ev.preventDefault();
        let pixels = document.getElementById("moveByCuantity").value;
        if(myWindow){
            myWindow.moveBy(pixels, pixels)
        }
    })
    document.getElementById("moveTo").addEventListener("click", (ev)=>{
        ev.preventDefault();
        let pixelsX = document.getElementById("moveToX").value;
        let pixelsY = document.getElementById("moveToY").value;
        if(myWindow){
            myWindow.moveTo(pixelsX, pixelsY)
        }
    })
    document.getElementById("resize").addEventListener("click", (ev)=>{
        ev.preventDefault();
        let pixelsX = document.getElementById("resizeX").value;
        let pixelsY = document.getElementById("resizeY").value;
        if(myWindow){
            myWindow.resizeTo(pixelsX, pixelsY);
        }
    })
    document.getElementById("message").addEventListener("click", (ev)=>{
        ev.preventDefault();
        if(myWindow){
            console.log(myWindow.postMessage("hello"))
        }
    })

    document.getElementById("close").addEventListener("click", (ev)=>{
        ev.preventDefault();
        if(myWindow){
            myWindow.close();
        }
    })
})