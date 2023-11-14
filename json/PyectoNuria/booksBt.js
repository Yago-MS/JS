let lBooks = books.books;

function highlightPages() {
    let lBooks3 = lBooks.filter(b => b.Pages > 300);
    console.log("más de 300",lBooks3);
    let lISBN = lBooks3.map(b => b.ISBN);
    console.log("isbn",lISBN);
    for (let isbn of lISBN){
        document.querySelector(`tr[data-isbn="${isbn}"]`).classList.add("table-warning");
    }

    /*
    lBooks.filter(b => b.Pages > 300)
        .map(b => b.ISBN)
        .forEach(b=> document.querySelector(`tr[data-isbn="${b}"]`).classList.add("table-warning") );
*/
}

function sortByDate() {
    lBooks.sort((a, b) => new Date(a.Published) > new Date(b.Published));
    showBooks();
}

function sortReadByDate() {
    lBooks.sort((a, b) => {
            if (a.Read && b.Read) {
                return new Date(a.Published) > new Date(b.Published)
            } else if (a.Read) {
                return -1
            } else {
                return 1
            }
        }
    );
    showBooks();
}


function showBooks() {
    console.log(JSON.stringify(lBooks));
    let booksF = document.getElementById("tBooks");
    let rowText = "";
    for (let b of lBooks) {
        rowText += `<tr data-isbn="${b.ISBN}"><td>${b.Title}</td>`;
        rowText += `<td>${b.Author}</td>`;
        rowText += `<td>${b.Genre}</td>`;
        rowText += `<td>${b.Pages}</td>`;
        rowText += `<td>${b.Published}</td>`;
        rowText += `<td>${b.read}</td>`;
        rowText += `<td>${b.Website}</td></tr>`;
        b.showTime = new Date();
      //  console.log(lBooks.showTime)
    }
    booksF.innerHTML = rowText;
    lBooks.booksAmount = lBooks.length;
    lBooks["books In Library"] = "algoooooooo";
    console.log(lBooks["books In Library"])
    //console.log(JSON.stringify(lBooks));
    console.log(lBooks);

}

window.onload = function () {
    showBooks();
    btSort.onclick = sortByDate;
    btSortRead.onclick = sortReadByDate;
    btPages.onclick = highlightPages;
};
