// initialize form variables
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');
const submit = document.querySelector('.submit');

// initialize read/unread buttons
const readUnread = document.querySelectorAll('.btn');

// initialize page variable
const content = document.querySelector('.content');

// initialize library variable
let myLibrary = [{ title: 'the Iliad', author: 'Homer', pages: 297, read: false }, { title: 'White Noise', author: 'Don DeLilo', pages: 326, read: true }];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /* this.readStatus = function() {
        if (read === true) {
            return 'Read';
        } else {
            return 'Unread';
        }
    } */
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

