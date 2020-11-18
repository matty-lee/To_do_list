import getElement from './utils.js';
import alert from './alert.js';
import { editElement } from './editDelete.js';

const inputBox = getElement('.input-box');
const listContainer = getElement('.list-container');
const list = getElement('.list');
const submitBtn = getElement('.submit-btn');

function addItem(e) {
  e.preventDefault();
  if (inputBox.value === '') {
    alert('Please enter a task', 'red');
  }
  if (inputBox.value != '' && submitBtn.textContent == 'Submit') {
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
  if (inputBox.value != '' && submitBtn.textContent == 'Edit Item') {
    editElement.textContent = inputBox.value;
    submitBtn.textContent = 'Submit';
    // need to finish functionality here
  }
}

export default addItem;
