let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const list = document.querySelector(".list");
const new_date = new Date();
const date_element = document.querySelector('.date');
const year = document.querySelector('.year');
const trash = document.querySelectorAll(".delete");

year.textContent = new_date.getFullYear();
date_element.textContent = `${months[new_date.getMonth()]} ${new_date.getDay()}`;
document.addEventListener("DOMContentLoaded", getTasks);


list.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.classList.contains('delete')) {
        const element = event.target.parentElement;
        element.remove();
        removeFromLocalStorage(element);
        console.log(`this one here: ${element}`)
    }
});

function removeFromLocalStorage(taskItem) {
    console.log(taskItem.textContent)
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index) {
        console.log(task);
        if(task === taskItem.textContent) {
            tasks.splice(index,1);
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


const addTaskBtn = document.querySelector("#addTask");

addTaskBtn.addEventListener("click", event => {
    event.preventDefault();
    const inputText = document.querySelector('input[type=text]');
    if (inputText.value === "") return
    const node = document.createElement('LI');
    node.innerHTML += `<input type="checkbox" name="done">`;

    const color = document.querySelector(".color");
    const textNode = document.createTextNode(inputText.value);
    node.appendChild(textNode);
    
    node.classList = "list-item";
    node.innerHTML += `<img class="delete" src="/img/delete.svg" alt="delete icon">`
    node.style.backgroundColor = color.value;
    list.appendChild(node);

    storeTaskInLocalStorage(node.textContent);
    inputText.value = "";
    
});


function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        
        const node = document.createElement('LI');
        node.innerHTML += `<input type="checkbox" name="done">`;
        const color = document.querySelector(".color");
        const textNode = document.createTextNode(task);
        node.appendChild(textNode);
        
        node.classList = "list-item";
        node.innerHTML += `<img class="delete" src="/img/delete.svg" alt="delete icon">`
        node.style.backgroundColor = color.value;
        list.appendChild(node);
    })

}



function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}