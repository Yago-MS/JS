let links = document.getElementsByTagName("a");

let pInfo = document.getElementById("info");

let paragraphs = document.getElementsByClassName("link");

pInfo.innerText = `The total of links in this page is: ${links.length}
`;

pInfo.innerText += `The address of the penultimate link is: ${links[links.length - 2].href}
`;
let num = 0;
for (let i = 0; i < links.length; i++) {
    if (links[i].href === "https://iesbelen.org/") {
        num++;
    }
}


pInfo.innerText += `There are ${num} links that are linked to the institute\'s website
`

let linksThirdParagraph = paragraphs[2].getElementsByTagName("a");

pInfo.innerText += `There are ${linksThirdParagraph.length} links on the third paragraph`

