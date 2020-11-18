import getElement from './utils.js';

const inputBox = getElement('.input-box');
const submitBtn = getElement('.submit-btn');
export let editElement;

function editDelete(e) {
  if (e.target.parentElement.classList.contains('trash-btn')) {
    e.target.parentElement.parentElement.remove();
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
