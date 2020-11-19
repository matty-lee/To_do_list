import getElement from './utils.js';
import clearList from './clearList.js';
import addItem from './addItem.js';
import editDelete from './editDelete.js';
import { getLocalStorage } from './localStorage.js';
import { createItem } from './addItem.js';

const submitBtn = getElement('.submit-btn');
const clearBtn = getElement('.clear-btn');
const listContainer = getElement('.list-container');

submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearList);
listContainer.addEventListener('click', editDelete);
window.addEventListener('DOMContentLoaded', function () {
  const list = getLocalStorage();
  list.map(function (item) {
    createItem(item.id, item.value);
  });
});
