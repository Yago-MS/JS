let countries = await fetch(`all_countries.json`)
    .then(
        successResponse => {
            if (successResponse.ok) {
                console.log(successResponse)
                return successResponse.json()
            } else {
                console.log(successResponse)
            }
        }
    )


let table = document.getElementById("tbody");

let id = 0;
for (const country of countries.countries) {
    let row = document.createElement("tr");
    row.setAttribute("id", id++)
    row.innerHTML = `<td>${country.name_en}</td><td></td><td></td>`;

    table.append(row);
}


let inputEn = document.getElementById("name_en")
let inputEs = document.getElementById("name_es");
let inputGr = document.getElementById("name_gr");

let antTr;
let idx;
table.addEventListener("click", function (ev) {
    if(antTr){
        antTr.classList.remove("table-primary");
    }
    antTr = ev.target.parentElement;
    idx = antTr.getAttribute("id");
    console.log(antTr)
    antTr.classList.add("table-primary");

    let tds = ev.target.parentElement.children;
    inputEn.value = tds[0].innerText;
    inputEs.value = tds[1].innerText;
    inputGr.value = tds[2].innerText;
    table.parentElement.classList.remove("table-primary")

})
inputEs.addEventListener("input", function (key) {


        /*for (const tr of table.children) {
            if (inputEn.value === tr.getAttribute("data-name")) {
                tr.innerHTML = `<td>${inputEn.value}</td><td>${inputEs.value}</td><td>${inputGr.value}</td>`

                countries.countries[tr.getAttribute("id")].name_es = inputEs.value;
                console.log(countries.countries[tr.id]);
            }
        }*/
    table.children[idx].innerHTML = `<td>${inputEn.value}</td><td>${inputEs.value}</td><td>${inputGr.value}</td>`
    countries.countries[idx].name_es = inputEs.value;
    console.log(countries.countries[idx]);


})
inputGr.addEventListener("input", function (key) {


        /*for (const tr of table.children) {
            if (inputEn.value === tr.getAttribute("data-name")) {
                tr.innerHTML = `<td>${inputEn.value}</td><td>${inputEs.value}</td><td>${inputGr.value}</td>`

                countries.countries[tr.getAttribute("id")].name_gr = inputGr.value;
                console.log(countries.countries[tr.id]);
            }
        }*/
    table.children[idx].innerHTML = `<td>${inputEn.value}</td><td>${inputEs.value}</td><td>${inputGr.value}</td>`
    countries.countries[idx].name_gr = inputGr.value;
    console.log(countries.countries[idx]);

});
