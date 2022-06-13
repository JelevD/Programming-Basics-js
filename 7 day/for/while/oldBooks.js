function oldBooks(input) {
    let favoriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    let book = false;
    while (nextBook !== "No More Books") {
        if (nextBook === favoriteBook) {
            book = true;
            break;
        }
        index++;
        nextBook = input[index];
    }
    if (book === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
