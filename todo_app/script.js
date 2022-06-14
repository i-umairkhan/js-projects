// DOM Elements
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");

// Todo list addition by creating a li elemeent
const addTodo = () => {
  if (inputEl.value) {
    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    listEl.appendChild(liEl);
    inputEl.value = "";
    // Event listner on todo item to mask toggle between complete (line-through)
    liEl.addEventListener("click", () => {
      liEl.classList.toggle("completed");
      saveLS();
    });
    // Event listner on todo to delet todo by rightclick using contextmenu
    liEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      liEl.remove();
    });
    saveLS();
  }
};

//Reading from local storage
const readLS = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  localTodos.forEach((todo) => {
    const loliEl = document.createElement("li");
    if (todo.completed === true) {
      loliEl.classList.add("completed");
    }
    loliEl.innerText = todo.text;
    listEl.appendChild(loliEl);
    // Event listner on todo item to mask toggle between complete (line-through)
    loliEl.addEventListener("click", () => {
      loliEl.classList.toggle("completed");
      saveLS();
    });
    // Event listner on todo to delet todo by rightclick using contextmenu
    loliEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      loliEl.remove();
      saveLS();
    });
  });
};

// Saving to local storage
const saveLS = () => {
  let allTodos = [];
  const todoEl = document.querySelectorAll("li");
  todoEl.forEach((todo) => {
    allTodos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(allTodos));
};

// Submit to add todo to list
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Read data from local storage
readLS();
