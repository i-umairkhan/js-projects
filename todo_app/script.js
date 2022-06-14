const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");

const addTodo = () => {
  if (inputEl.value) {
    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    listEl.appendChild(liEl);
    inputEl.value = "";
    liEl.addEventListener("click", () => {
      liEl.classList.toggle("completed");
    });
    liEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      liEl.remove();
    });
  }
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
