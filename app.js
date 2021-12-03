// initialize form variables
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');
const submit = document.querySelector('.submit');
const content = document.querySelector('.content');
const button = document.querySelectorAll('button');

// initialize library variable
let myLibrary = [];

// Book constructor
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

// add book to array
function addBookToLibrary() {
    if (!title.value || !author.value || !pages.value) {
        console.log('Please Input a Value');
        return "Please Input a Value";
    }
    const newBook = new Book(title.value, author.value, pages.value, checkBox.checked);
    myLibrary.push(newBook)
    title.value = '';
    author.value = '';
    pages.value = '';
    checkBox.checked = false;
}


// display library on page
function displayLibrary() {

}


// submit button on form
submit.addEventListener('click', addBookToLibrary)

// read/unread button
function toggleButton(btn) {
    if (btn.classList === 'read') {
        btn.classList = 'unread';
    } else if (btn.classList === 'unread') {
        btn.classList = 'read';
    }
}
button.forEach(btn => {
    if (btn.classList !== 'submit') {
        btn.addEventListener('click', toggleButton)
    }
})