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

export function editLocalStorage(id, value) {
  let list = getLocalStorage();
  list = list.map(function (item) {
    if (item.id == id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(list));
}

export function deleteLocalStorage(id) {
  let list = getLocalStorage();
  list = list.filter(function (item) {
    if (item.id != id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(list));
}
