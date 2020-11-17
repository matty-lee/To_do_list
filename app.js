import getElement from './utils.js';
import addItem from './addItem.js';

const submitBtn = getElement('.submit-btn');

submitBtn.addEventListener('click', addItem);


