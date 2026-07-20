const myLibrary = [];

// constructor for Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// creates a new book and adds that book into the myLibrary array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


function displayBooks(library) {
    for (const book of library) {
        console.log(`${book.title} by ${book.author}, ${book.pages} long. Read: ${book.read}`);
    }
}