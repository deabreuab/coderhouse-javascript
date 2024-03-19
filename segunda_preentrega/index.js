document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let tasks = [];

    form.addEventListener('submit', function(event) {
        console.log('aca')
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        const taskName = input.value.trim();
        if (taskName !== '') {
            addTask(taskName);
            input.value = '';
        }
    });

    function addTask(taskName) {
        const task = {
            id: Date.now(),
            name: taskName
        };
        tasks.push(task);
        renderTask(task);
    }

    function renderTask(task) {
        const item = document.createElement('li');
        item.innerHTML = `
            <span>${task.name}</span>
            <button class="delete-btn" data-id="${task.id}">Eliminar</button>
        `;
        todoList.appendChild(item);

        const deleteButton = item.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    }

    function renderTasks() {
        todoList.innerHTML = '';
        tasks.forEach(task => {
            renderTask(task);
        });
    }
});