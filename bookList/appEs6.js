class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td> <a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout( () => document.querySelector('.alert').remove(), 3000)
        // setTimeout(function() {
        //     document.querySelector('.alert').remove();
        // }, 3000);
    }

    deleteBook(target) {
        if(target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        const title = document.getElementById('title').value = '',
        author = document.getElementById('author').value = '',
        isbn = document.getElementById('isbn').value = '';
    }
}
// Local storage class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse( localStorage.getItem('books') );
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            ui.addBookToList(book);
        })

    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book)

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn == isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));

    }
}

// When dom loads, display books
document.addEventListener('DOMContentLoaded', Store.displayBooks());

document.getElementById('book-form').addEventListener('submit', function(event) {
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    console.log(book);
    const ui = new UI();
    // Validate

    if (title == '' || author == '' || isbn == '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.showAlert("Book added", "success");
        ui.addBookToList(book);
        ui.clearFields();
        Store.addBook(book);

    }

    event.preventDefault();

    // clear fields
});


// event listener for delete 

document.getElementById('book-list').addEventListener('click', event => {
    const ui = new UI;
    ui.deleteBook(event.target);
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent)
    // show meesage
    ui.showAlert("Book removed", "success");
    event.preventDefault();
})