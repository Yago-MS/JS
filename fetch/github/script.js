let button = document.querySelector("button");
let userName = document.querySelector("input");

button.onclick = async function () {
    let json = await fetch(`https://api.github.com/users/${userName.value}`)
        .then(async successResponse => {
                if (successResponse.ok) {//comprobamos si la respuesta está en el reango 200-299
                    console.log(successResponse)
                    return successResponse.json().then(data => data).catch(error => error.message)
                } else {
                    let err = await successResponse.json();
                    return err.message;
                }
            }, error => {
                return error.message
            }
        )
};


