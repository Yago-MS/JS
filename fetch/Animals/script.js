let nombres = await fetch(`http://51.68.45.25/vpsDAW/animals.json`)
    .then(
        successResponse => {
            if (successResponse.status != 200) { //comprobamos si la respuesta está en el reango 200-299
                console.log("errorSuccess");
            } else {
                return successResponse.json();
            }
        },
        failResponse => {//este parametro es igual a .catch tambien
            return null;
            console.log("el segundo");
        }
    )
console.log(nombres)