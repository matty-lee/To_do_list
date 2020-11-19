import getElement from './utils.js';

const inputBox = getElement('.input-box');
const submitBtn = getElement('.submit-btn');

function resetForm() {
  inputBox.value = '';
  submitBtn.textContent = 'Submit';
}

export default resetForm;
