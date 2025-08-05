// DOM Manipulation	To‑Do із drag‑and‑drop: Додай / видаляй задачі, перетягуй їх, зберігай порядок у localStorage.
// document.createElement / remove; події dragstart / dragover / drop

let i = 0;
const arr = JSON.parse(localStorage.getItem('tasks')) ?? [];

const body = document.querySelector('body');
const addBtntask = document.createElement('button');

addBtntask.textContent = '+';
addBtntask.addEventListener('click', addTask);
body.append(addBtntask);

arr.map(item => {
  return addTask(item);
});

function addTask(item) {
  const todo = document.createElement('button');
  todo.classList.add('task');
  todo.textContent = ` ${item.text}${++i}`;
  todo.style.display = 'flex';
  todo.style.marginTop = '10px';
  todo.style.width = '75px';
  todo.setAttribute('id', i);
  body.append(todo);

  arr.push(todo);
  const close = document.createElement('span');
  close.textContent = 'x';
  close.style.marginLeft = 'auto';
  close.addEventListener('click', removeTask(todo.id));
  todo.append(close);
  savedTask();
}

function removeTask(id) {
  return arr.filter((item, idx) => {
    idx !== id;
  });
}

function savedTask() {
  localStorage.setItem('tasks', JSON.stringify(arr));
}
