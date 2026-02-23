const iButton = document.getElementById("mainButton");
const ul = document.getElementById("list");
const input = document.getElementById("mainInput");

let todos = [];

// Load saved todos when page opens
window.addEventListener("DOMContentLoaded", () => {
    const storedTodos = localStorage.getItem("todos");

    if(storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(todo => createTodoElement(todo));
    }
})

iButton.addEventListener("click", addTodo);

function addTodo()
{
    const text = input.value.trim();

    // Prevent empty todos
    if(text === "") {
        alert("Please enter a todo");
        return;
    }

    const todo = {
        id: Date.now(), // unique id
        text: text,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    createTodoElement(todo);
    
    input.value = "";

}
   
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = todo.completed;



    const span = document.createElement("span")
    span.textContent = todo.text;

    if (todo.completed) {
        span.style.textDecoration = "line-through";
        span.style.opacity = 0.6;
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
    
    deleteBtn.addEventListener("click", () => {
        todos = todos.filter(t => t.id != todo.id);
        saveTodos();
        li.remove();
    });

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        span.style.opacity = checkbox.checked ? "0.6" : "1";
        
        saveTodos();
    });

    // append elements
    li.append(checkbox, span, deleteBtn);
    ul.appendChild(li);

    // clear input
    input.value = "";
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTodo();
    }
})
