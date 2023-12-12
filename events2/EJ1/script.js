    document.addEventListener('DOMContentLoaded', function () {
        let image = document.getElementById("image");

        function changeImageSize(key){
            if(key.key==="ArrowUp"){
                image.width += image.width*0.1;
                image.height += image.height*0.1;
            }if(key.key==="ArrowDown"){

                image.width -= image.width*0.1;
                image.height -= image.height*0.1;
            }
            if(image.width>=1000){
                image.remove();
                document.removeEventListener("keydown", changeImageSize);
            }
        }

        document.addEventListener("keydown", changeImageSize);
    });
