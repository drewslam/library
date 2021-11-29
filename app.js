const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.read');
const submit = document.querySelector('.submit');
const content = document.querySelector('.content');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readStatus = function() {
        if (read === true) {
            return 'Read';
        } else {
            return 'Unread';
        }
    }
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, checkBox.checked);
    title.value = '';
    author.value = '';
    pages.value = '';
    checkBox.checked = false;
    myLibrary.push(newBook);
    createBookList();
}

function createBookList() {
    return myLibrary.forEach(book => {
        const p = document.createElement('p');
        p.innerHTML = `${book.title} by ${book.author}, ${book.pages} pages, ${book.readStatus()}`;
        content.appendChild(p)
    })
}

submit.addEventListener('click', addBookToLibrary)