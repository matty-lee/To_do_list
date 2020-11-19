import getElement from './utils.js';
import alert from './alert.js';
import resetForm from './resetForm.js';

const listContainer = getElement('.list-container');
const list = getElement('.list');
const submitBtn = getElement('.submit-btn');

const clearList = function () {
  listContainer.innerHTML = '';
  alert('List Cleared', 'red');
  list.classList.remove('show-list');
  submitBtn.textContent = 'Submit';
  resetForm();
  let storage = JSON.parse(localStorage.getItem('list'));
  console.log(storage);
  storage = [];
  console.log(storage);
  localStorage.setItem('list', storage);
};

export default clearList;
