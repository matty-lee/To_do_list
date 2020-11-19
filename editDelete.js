import getElement from './utils.js';
import resetForm from './resetForm.js';
import { deleteLocalStorage, getLocalStorage } from './localStorage.js';
import alert from './alert.js';

const inputBox = getElement('.input-box');
const submitBtn = getElement('.submit-btn');
export let editElement;
const list = getElement('.list');

function editDelete(e) {
  if (e.target.parentElement.classList.contains('trash-btn')) {
    const listCount = getLocalStorage();
    e.target.parentElement.parentElement.remove();
    resetForm();
    const id = e.target.parentElement.parentElement.dataset.id;
    deleteLocalStorage(id);
    alert('Item Deleted', 'red');
    console.log(listCount.length);
    if (listCount.length < 2) {
      list.classList.remove('show-list');
    }
  }
  if (e.target.parentElement.classList.contains('edit-btn')) {
    editElement = e.target.parentElement.parentElement.firstElementChild;
    console.log(editElement);
    const textToEdit = editElement.textContent;
    submitBtn.textContent = 'Edit Item';
    e.target.parentElement.parentElement.style.backgroundColor = '#FFFBDB';
    inputBox.value = textToEdit;
  }
}

export default editDelete;
