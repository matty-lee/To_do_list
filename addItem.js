import getElement from './utils.js';
import alert from './alert.js';
import { editElement } from './editDelete.js';
import resetForm from './resetForm.js';
import { setToStorage, editLocalStorage } from './localStorage.js';

const inputBox = getElement('.input-box');
const listContainer = getElement('.list-container');
const list = getElement('.list');
const submitBtn = getElement('.submit-btn');
let id;

function addItem(e) {
  e.preventDefault();
  if (inputBox.value === '') {
    alert('Please enter a task', 'red');
  }
  if (inputBox.value != '' && submitBtn.textContent == 'Submit') {
    const id = new Date().getTime().toString();;
    createItem(id, inputBox.value);
    alert('Added!', 'green');
    setToStorage(id, inputBox.value);
    resetForm();
  }
  if (inputBox.value != '' && submitBtn.textContent == 'Edit Item') {
    editElement.textContent = inputBox.value;
    editElement.parentElement.style.backgroundColor = `white`;
    const selectedID = editElement.parentElement.dataset.id;
    const newText = editElement.textContent;
    editLocalStorage(selectedID, newText);
    resetForm();
    alert('Edited', 'green');
  }
}

export function createItem(id, value) {
  const newItem = document.createElement('div');
  newItem.classList.add('list-item');
  newItem.setAttribute('data-id', id);
  newItem.innerHTML = `<p class="item-text">${value}</p>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
    <button class="edit-btn"><i class="fas fa-edit"></i></button>`;
  listContainer.appendChild(newItem);
  list.classList.add('show-list');
}

export default addItem;
