// initialize form variables
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');
const submit = document.querySelector('.submit');

// initialize page variable
const content = document.querySelector('.content');

// initialize library variable
let myLibrary = [
    // dummy books
    {
        title: 'the Iliad',
        author: 'Homer',
        pages: 297,
        read: false
    },
    {
        title: 'White Noise',
        author: 'Don DeLilo',
        pages: 326,
        read: true
    }
];
let contentLib = [...content.children];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    displayLibrary();
}

// display library on page
function displayLibrary() {
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.setAttribute('data-number', myLibrary.indexOf(book));
        const btn = document.createElement('button');
        btn.classList.add('btn');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        content.appendChild(div).classList.add('book');
        div.innerHTML = `
                        <p class='title'>${book.title}</p>
                        <p class='author'>by ${book.author}</p>
                        <p class='pages'>${book.pages} pages</p>
                        `;
        div.appendChild(btn);
        div.appendChild(deleteBtn);

        if (div.getAttribute('data-number')) {
            contentLib.push(div)
        }

        if (book.read === true) {
            btn.classList.add('read');
            btn.textContent = 'Read';
        } else {
            btn.classList.add('unread');
            btn.textContent = 'Unread';
        }


        btn.addEventListener('click', () => {
            if (btn.classList.contains('unread')) {
                book.read = true;
                btn.classList.remove('unread');
                btn.classList.add('read');
                btn.textContent = 'Read';
            } else {
                book.read = false;
                btn.classList.remove('read');
                btn.classList.add('unread');
                btn.textContent = 'Unread';
            }
        })

        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(book, 1);
            contentLib.splice(book, 1)
            content.removeChild(div);
        })

        // prevent duplicate entries
        for (let i = 0; i < contentLib.length; i++) {
            let counter = 0;
            for (let j = 0; j < contentLib.length; j++) {
                if (contentLib[i].getAttribute('data-number') === contentLib[j].getAttribute('data-number')) {
                    counter++
                    if (counter > 1) {
                        content.removeChild(contentLib[(j)]);
                        contentLib.splice((j), 1);
                    }
                }
            }
        }
    })
}

// submit button on form
submit.addEventListener('click', addBookToLibrary)

displayLibrary();