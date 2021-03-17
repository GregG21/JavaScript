// BOOK CONSTURCOTR
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI CONSTRUCTOR

function UI() {

}

UI.prototype.addBookToList = function(book) {
     const list = document.getElementById('book-list');
     const row = document.createElement('tr');
     row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">X</a></td>
     
     `;

     list.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

//delete books

UI.prototype.deleteBook = function(target) {
    if(target.className === "delete") {
        target.parentElement.parentElement.remove();
    }
};


UI.prototype.clearFields = function() {
    const title = document.getElementById('title').value = '',
    author = document.getElementById('author').value = '',
    isbn = document.getElementById('isbn').value = '';
}




// EVENT LISTENERS

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

    }

    event.preventDefault();

    // clear fields
});


// event listener for delete 

document.getElementById('book-list').addEventListener('click', function(event){
    const ui = new UI;

    ui.deleteBook(event.target);

    // show meesage

    ui.showAlert("Book removed", "success");
    event.preventDefault();
})