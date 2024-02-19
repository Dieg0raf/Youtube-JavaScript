let todoList = []; // empty array to start

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {

        // grabs name and dueDate from todoList[i] object
        const { name, dueDate } = todoList[i]

        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1)
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `
        todoListHTML += html
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML
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