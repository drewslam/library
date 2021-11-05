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
    /* this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    } */
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, checkBox.checked);
    title.value = '';
    author.value = '';
    pages.value = '';
    checkBox.checked = false;
    return myLibrary.push(newBook);
}

submit.addEventListener('click', addBookToLibrary)