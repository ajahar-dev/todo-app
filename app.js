const iButton = document.getElementById("mainButton");
const ul = document.getElementById("list");
const input = document.getElementById("mainInput");

iButton.addEventListener("click", addTodo);

function addTodo()
{
    const text = input.value.trim();

    // Prevent empty todos
    if(text === "") {
        alert("Please enter a todo");
        return;
    }

    // Create elements
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    const span = document.createElement("span")
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    checkbox.addEventListener("change", () => {
        if(checkbox.checked) {
            span.style.textDecoration ="line-through";
            span.style.opacity = "0.6";
        }
        else {
            span.style.textDecoration ="none";
            span.style.opacity = "1";
        }
    })

    // append elements
    li.append(checkbox, span, deleteBtn);
    ul.appendChild(li);

    // clear input
    input.value = "";
};

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTodo();
    }
})
