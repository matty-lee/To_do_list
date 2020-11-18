import getElement from './utils.js';
import alert from './alert.js';

const listContainer = getElement('.list-container');
const list = getElement('.list');
const submitBtn = getElement('.submit-btn');

const clearList = function () {
  listContainer.innerHTML = '';
  alert('List Cleared', 'red');
  list.classList.remove('show-list');
  submitBtn.textContent = 'Submit';
};

export default clearList;
