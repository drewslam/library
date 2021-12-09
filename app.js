// initialize form variables
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');
const submit = document.querySelector('.submit');

// initialize page variable
const content = document.querySelector('.content');

// initialize library variable
let myLibrary = [{ title: 'the Iliad', author: 'Homer', pages: 297, read: false }, { title: 'White Noise', author: 'Don DeLilo', pages: 326, read: true }];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
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
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.textContent = book.title;
        p2.textContent = `by ${book.author}`;
        p3.textContent = `${book.pages} pages`;
        content.appendChild(div).classList.add('book');
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(btn).classList.add('btn');
        if (book.read === true) {
            btn.classList.add('read');
            btn.textContent = 'Read';
        } else {
            btn.classList.add('unread');
            btn.textContent = 'Unread';
        }
    })
}

displayLibrary();

// initialize read/unread buttons
const readUnread = document.querySelectorAll('.btn');

// read/unread button toggle
readUnread.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('unread')) {
            btn.classList.remove('unread');
            btn.classList.add('read');
            btn.textContent = 'Read';
        } else {
            btn.classList.remove('read');
            btn.classList.add('unread');
            btn.textContent = 'Unread';
        }
    })
})


// submit button on form
submit.addEventListener('click', addBookToLibrary)

