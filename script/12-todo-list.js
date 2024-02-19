let todoList = []; // empty array to start

renderTodoList()

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo()
});

function renderTodoList() {
    let todoListHTML = ''

    todoList.forEach((todoObject, index) => {
        // grabs name and dueDate from todoList[i] object
        const { name, dueDate } = todoObject

        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `
        todoListHTML += html
    })
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1)
        renderTodoList();
    })
})

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-due-input')

    const dueDate = dateInputElement.value
    const name = inputElement.value;

    todoList.push({
        name,
        dueDate
    });
    
    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList()

}