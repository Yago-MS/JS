let books = {
    "books": [
        {
            id:1,
            title: "Hero of Ages",
            genre: "Fantasy",
            author: "Brandon Sanderson",
            pages: 600,
            published: new Date(2008, 9, 14).toDateString(),
            read: true,
            website: "https://cosmere.es/el-heroe-de-las-eras/"
        },
        {
            id:2,
            title: "Well of Ascension",
            genre: "Fantasy",
            author: "Brandon Sanderson",
            pages: 700,
            published: new Date(2007, 8, 21).toDateString(),
            read: true,
            website: "https://cosmere.es/el-pozo-de-la-ascension/"
        }
    ]
};

let bookset = books.books;

console.log("=== Genres ===");
let uniqueGenres = new Set();

for (let i = 0; i < bookset.length; i++) {
    uniqueGenres.add(bookset[i].genre);
}

uniqueGenres.forEach((genre) => {
    console.log("Genre: " + genre);
});


console.log("\n=== Books with More than 300 Pages ===");
for (let i = 0; i < bookset.length; i++) {
    if (bookset[i].pages > 300) {
        console.log(bookset[i]);
    }
}

console.log("\n=== Books Published More than Two Years Ago ===");
for (let i = 0; i < bookset.length; i++) {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    if (new Date(bookset[i].published) < twoYearsAgo) {
        console.log(bookset[i]);
    }
}

let authors = [];

console.log("\n=== Authors ===");
for (let i = 0; i < bookset.length; i++) {
    if (!authors.includes(bookset[i].author)) {
        authors.push(bookset[i].author);
    }
}
console.log(authors);

console.log("\n=== Books by Author ===");
for (let i = 0; i < authors.length; i++) {
    console.log("Author: " + authors[i]);
    for (let j = 0; j < bookset.length; j++) {
        if (bookset[j].author === authors[i]) {
            console.log(bookset[j]);
        }
    }
}

let booksRead = [];


for (let i = 0; i < bookset.length; i++) {
    if (bookset[i].read) {
        booksRead.push(bookset[i]);
    }
}

booksRead.sort((a, b) => new Date(a.published) - new Date(b.published));

console.log("\n=== Read Books Sorted by Publication Date ===");
console.log(booksRead);
