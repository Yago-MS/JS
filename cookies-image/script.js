document.addEventListener("DOMContentLoaded", function () {
    setLastSubmit();
    let fileReader = new FileReader();
    fileReader.onload = ev => {
        imageToCookies(ev.target.result)
        setLastSubmit();
    }

    let input = document.getElementById("submitFile");
    input.addEventListener("change", function () {
        previewImage(input);
    });
    document.getElementById("submit").addEventListener("click", () => {
        if (input.files[0]) {
            fileReader.readAsDataURL(input.files[0])
        }

    });

    function previewImage(input) {
        const file = input.files[0];
        if (file) {
            let preview = document.createElement("img");
            preview.src = URL.createObjectURL(file);
            preview.width = 250;
            let photoPreview = document.getElementById("photoPreview");

            photoPreview.innerHTML = "";
            photoPreview.appendChild(preview);
        } else {
            console.error("No file selected.");
        }
    }


    function imageToCookies(image) {
        localStorage.setItem("image", image);
    }

    function setLastSubmit() {
        if (localStorage.getItem("image")) {
            if (!document.getElementById("submited")) {
                let img = document.createElement("img");
                img.src = localStorage.getItem("image");
                img.width = 250;
                img.id = "submited";
                document.getElementById("lastSubmit").appendChild(img);
            } else {
                let img = document.getElementById("submited");
                img.src = localStorage.getItem("image");
            }
        }


    }
})
