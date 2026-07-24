const myLibrary = [];

// constructor for Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.changeRead = function() {
        if (this.read === "yes") {
            this.read = "no";
        } else {
            this.read = "yes";
        }
        console.log(`changed read status of book with ID ${this.id} to ${this.read}`);
        displayBooks(myLibrary);
    };
}

// creates a new book and adds that book into the myLibrary array
function addBookToLibrary(title, author, pages, read, event) {
    console.log("im pressing!");
    event.preventDefault();
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(`added: ${book.title} by ${book.author}, ${book.pages} pages, read: ${book.read}. ID ${book.id}`);
    displayBooks(myLibrary);
}

function removeBook(id) {
    myLibrary.forEach((book, index) => {
        if (book.id === id) {
            myLibrary.splice(index, 1);
            console.log(`removed: ${book.title} by ${book.author}, ${book.pages} pages, read: ${book.read}. ID ${book.id}`);
        }
    });
    
    displayBooks(myLibrary);
}


function displayBooks(library) {
    const container = document.querySelector(".container");
    // removes all children so existing books that are already in the array don't keep duplicating in the web
    container.replaceChildren();

    for (const book of library) {
        const newCard = document.createElement("div");
        newCard.classList.add("book-card");
        var bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;
        var bookAuthor = document.createElement("p");
        bookAuthor.textContent = "by: " + book.author;
        var bookPages = document.createElement("p");
        bookPages.textContent = book.pages + " pages";
        var bookRead = document.createElement("p");
        bookRead.textContent = "read: " + book.read;
        const readToggle = document.createElement("button");
        readToggle.type = "button";
        readToggle.textContent = "Toggle Read";
        readToggle.addEventListener("click", () => book.changeRead());
        const delButton = document.createElement("button");
        delButton.type = "button";
        delButton.textContent = "Delete";
        delButton.addEventListener("click", () => removeBook(book.id));
        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        newCard.appendChild(bookRead);
        newCard.appendChild(readToggle);
        newCard.appendChild(delButton);
        container.appendChild(newCard);
    }
}

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read-status");
form.addEventListener("submit", function (event) {
    addBookToLibrary(title.value, author.value, pages.value, read.value, event);
});
