import getElement from './utils.js';

const inputBox = getElement('.input-box');
const submitBtn = getElement('.submit-btn');
const alertBox = getElement('.alert-box');
const list = getElement('.list');
const listContainer = getElement('.list-container');

submitBtn.addEventListener('click', addItem);

function addItem(e) {
  e.preventDefault();
  if (inputBox.value === '') {
    alert('Please enter a task', 'red');
  }
  if (inputBox.value != '') {
    const newItem = document.createElement('div');
    newItem.classList.add('list-item');
    newItem.innerHTML = `<p class="item-text">${inputBox.value}</p>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
    <button class="edit-btn"><i class="fas fa-edit"></i></button>`;
    console.log(newItem);
    listContainer.appendChild(newItem);
    inputBox.value = '';
    list.classList.add('show-list');
    alert('Added!', 'green');
  }
}

function alert(message, color) {
  alertBox.textContent = message;
  alertBox.classList.add(`alert-${color}`);
  setTimeout(() => {
    alertBox.textContent = '';
    alertBox.classList.remove(`alert-${color}`);
  }, 1200);
}
