let nombres = await fetch(`json.json`)
    .then(
        successResponse => {
            if (successResponse.ok) {//comprobamos si la respuesta está en el reango 200-299
                console.log(successResponse)
                return successResponse.json()
            } else {
                console.log(successResponse)
            }
        }
    )
let arr = Object.keys(nombres.animals)
console.log(arr)
for(let i = 0; i<6; i++){
    const element = arr[i];
    console.log(element)
}
