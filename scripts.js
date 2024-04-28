const myLibrary = [];
let displayed = [];

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

const library = document.querySelector('#library');
function displayNewBook() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        myLibrary.forEach(book => {
            if (!displayed.includes(book)) {
                let content = document.createElement('div');
                content.setAttribute('class', 'book');
                content.setAttribute('id', `${book.title}`)
                library.appendChild(content)
                for (let item in book) {
                    let current = document.querySelector("#"+`${book.title}`);
                    let content = document.createElement('div')
                    content.setAttribute('id', '#'+book[item]);
                    content.textContent = `${item}: ${book[item]}`;
                    current.appendChild(content);
            }
            displayed.push(book);
            form.reset();
            }
            
        })
    })
}

displayNewBook();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});