document.addEventListener("DOMContentLoaded", async function () {
    async function getData(url) {
        return fetch(url).then(res => res.json()
            .catch(err => err = "error"));
    }

    let comms = await getData("arbol.json");
    let string = "";
    for (const comm of comms) {
        console.log(comm)
        string += `<details><summary>
                ${comm.label} - ${comm.provinces.length}
                </summary>`;

        for (const province of comm.provinces) {
            string += `<details><summary>
                        ${province.label} - ${province.towns.length}
                        </summary>`

            for (const town of province.towns) {
                string += `<summary>${town.label}</summary>`
            }
            string += `</details>`
        }
        string += `</details>`

    }
    let summary = document.querySelector("#comunities")
    summary.innerHTML = string;
})
