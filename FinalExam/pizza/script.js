let pizzas = await fetch(`Pizza.json`)
    .then(
        successResponse => {
            if (successResponse.ok) {
                return successResponse.json()
            } else {
                console.log(successResponse)
            }
        }
    );

let menu = document.getElementById("menu");
let id = 0;
for (const pizza of pizzas.Menu) {
    let div = document.createElement("div");
    div.classList.add("imgDiv");
    let img = document.createElement("img");
    img.src = pizza.asset.url;
    img.width = "300";
    img.height = "300";
    img.id = id++;
    img.draggable = true;
    div.appendChild(img)
    menu.appendChild(div);
    menu.appendChild(document.createElement("br"))
}
let divs = document.querySelectorAll(".imgDiv");
for (const div of divs) {
    div.addEventListener("click", function (e){
        if(div.children.length===1){
            let p = document.createElement("p");
            p.innerText = pizzas.Menu[e.target.id].menu_description;
            div.appendChild(p);
        }
    })
}



let size = document.getElementById("size");

function start(e) {
    e.dataTransfer.setData('src', this.src);
    e.dataTransfer.setData("id", this.id)
    e.dataTransfer.effectAllowed = 'move';
}

function over(e) {

    e.dataTransfer.dropEffect = 'move';
    return false;
}

function drop(e) {

    let div = divs[e.dataTransfer.getData("id")];
    if(div.children[1]){
        div.children[1].remove();
    }

    let imagen = new Image();
    imagen.src = e.dataTransfer.getData('src');
    imagen.id = e.dataTransfer.getData("id");
    imagen.height = "300";
    imagen.width = "300"
    if (document.getElementById("select").children.length <= 0) {
        document.getElementById('select').appendChild(imagen);
        showSizes(e);
    }
}

function showSizes(e) {

    document.getElementById(e.dataTransfer.getData("id")).remove();

    for (const size of pizzas.Menu[e.dataTransfer.getData("id")].sizes) {
        let radio = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = size;
        radio.type = "radio"
        radio.value = size.toString();
        console.log(radio.value);
        radio.name = "sizes"
        document.getElementById("select").appendChild(label)
        document.getElementById("select").appendChild(radio)
        radio.addEventListener("change", showConfirm);

    }


}


function showConfirm() {
    let confirm = document.getElementById("confirm");
    let select = document.getElementById("select");
    let id = select.getElementsByTagName("img")[0].id;
    confirm.innerHTML = `<p>Your choice</p>`;
    confirm.innerHTML += `
        <ul>
        <li>${pizzas.Menu[id].name}</li>
        <li>${document.querySelector('input[name="sizes"]:checked').value}</li>
        <li>ingredients</li>
        </ul>`
    for (const ingredient of pizzas.Menu[id].toppings) {
        let check = document.createElement("input");
        check.type = "checkbox";
        check.checked = true;
        let label = document.createElement("label");
        label.innerText = ingredient.name;

        confirm.appendChild(label);
        confirm.appendChild(check);
        let br = document.createElement("br")
        confirm.appendChild(br);
    }

}

document.getElementById("select").ondrop = drop;
document.getElementById("select").ondragover = over;
document.getElementById("0").ondragstart = start;
document.getElementById("1").ondragstart = start;
document.getElementById("2").ondragstart = start;


