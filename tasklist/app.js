
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners(){
    // LOAD EVENT

    document.addEventListener('DOMContentLoaded', getTasks);
    // ADD TASKS
    form.addEventListener('submit', addTask);
    // REMOVE TASK
    taskList.addEventListener('click', removeTask);
    // CLEAR TASKS
    clearBtn.addEventListener('click', clearTasks);
    // FILTER TASKS

    filter.addEventListener('keyup', filterTasks);

};

function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task))
        const link = document.createElement("a");
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="fa fa-remove"></li>`;
        li.appendChild(link);

        taskList.appendChild(li);
    })
}


function addTask(e) {
    e.preventDefault();
    if(taskInput.value === '') return;
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement("a");
    link.className = 'delete-item secondary-content';
    link.innerHTML = `<i class="fa fa-remove"></li>`;
    li.appendChild(link);

    taskList.appendChild(li);
    // store locak storage

    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = "";

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


function removeTask(event) {
    event.preventDefault();
    if(event.target.classList.contains("fa")) {
        if(confirm("Are you sure?")) {
            event.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(event.target.parentElement.parentElement);

        }
    }

}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    // taskList.innerHTML = "";
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();

}

function filterTasks(event) {
    const text = event.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
    

}