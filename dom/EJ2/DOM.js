function generateH(){
    document.getElementById("generate").hidden = true;
    let myDiv = document.getElementById("headers");

    for (let i = 1; i <= 6; i++) {
        let hijo = document.createElement(`h${i}`);
        hijo.textContent = `Header ${i}`;
        myDiv.append(hijo);
    }
}