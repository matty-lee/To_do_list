export function setToStorage(itemID, text) {
  const object = { id: itemID, value: text };
  const itemsList = getLocalStorage();
  itemsList.push(object);
  localStorage.setItem('list', JSON.stringify(itemsList));
  // console.log(object);
  // localStorage.setItem(object);
}

export function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
