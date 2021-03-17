class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    
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
        showAlert(message, className){
            const div = createElement('div');
            div.className = `alert ${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const form = document.querySelector('#book-form');
            container.insertBefore(div, form);
            setTimeout( () => document.querySelector('.alert').remove(), 3000); 
        }

        removeBookFromList(target){
            if(target.classList.contains("delete")){
                target.parentElement.parentElement.remove();
            }
        }
        clearFields() {
             const title = document.getElementById('title').value = "";
             const author = document.getElementById('author').value = "";
             const isbn = document.getElementById('isbn').value = "";
        }

    

}