import getElement from './utils.js';

const alertBox = getElement('.alert-box');

function alert(message, color) {
  alertBox.textContent = message;
  alertBox.classList.add(`alert-${color}`);
  setTimeout(() => {
    alertBox.textContent = '';
    alertBox.classList.remove(`alert-${color}`);
  }, 1200);
}
export default alert;
