let animales = document.getElementById("container");
let url = 'http://51.68.45.25/vpsDAW/animals.json';
async function getRemoteData(url){
    let response = await fetch(url);
    if(response.ok){
        return response.json();
    }else{
        throw new Error("error");
    }
}

getRemoteData(url).then(data => {
    animales.innerHTML = JSON.stringify(data)
    console.log(data);
})
.catch(e =>{
    animales.innerHTML = "algo fue mal";
    console.log(e);
});