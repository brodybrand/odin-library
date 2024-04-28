const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}

const form = document.querySelector('.add-book-form');
function addBookToLibrary() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let book = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(book);
    })
}

addBookToLibrary();
