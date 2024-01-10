let pizzas = await fetch(`Pizza.json`)
    .then(
        successResponse => {
            if (successResponse.ok) {
                console.log(successResponse)
                return successResponse.json()
            } else {
                console.log(successResponse)
            }
        }
    );

let menu = document.getElementById("menu");
let id = 0;
for (const pizza of pizzas.Menu) {
    console.log(pizza)
    let img = document.createElement("img");
    img.src = pizza.asset.url;
    img.width = "300";
    img.height = "300";
    img.id = id++;
    img.draggable = true;

    menu.appendChild(img);
    menu.appendChild(document.createElement("br"))
}


let size = document.getElementById("size");

function start(e) {
    console.log(e)
    e.dataTransfer.setData('src', this.src);
    e.dataTransfer.setData("id", this.id)
    e.dataTransfer.effectAllowed = 'move';
}

function over(e) {

    e.dataTransfer.dropEffect = 'move';
    return false;
}

function drop(e) {

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
        radio.value = size;
        radio.name = "sizes"
        document.getElementById("select").appendChild(label)
        document.getElementById("select").appendChild(radio)

    }

    showConfirm(e)
}

function showConfirm(e) {
    console.log(e)
    let confirm = document.getElementById("confirm");
    confirm.innerHTML = `<p>Your choice</p>`;
    console.log(pizzas.Menu[e.dataTransfer.getData("id")])
    confirm.innerHTML += `
        <ul>
        <li>${pizzas.Menu[e.dataTransfer.getData("id")].name}</li>
        <li>${document.querySelector('input[name="size"]:checked')}</li>
        <li>ingredients</li>
        </ul>`
    for (const ingredient of pizzas.Menu[e.dataTransfer.getData("id")].toppings) {
        let check = document.createElement("input");
        check.type = "checkbox";
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


