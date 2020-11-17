const getElement = function (element) {
  const selection = document.querySelector(element);
  if (selection) {
    return selection;
  } else {
    throw new Error(`"${element}" element does not exist`);
  }
};

export default getElement;
