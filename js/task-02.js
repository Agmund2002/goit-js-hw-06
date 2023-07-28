const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elems = ingredients.map(elem => {
  const listElem = document.createElement('li');
  listElem.textContent = elem;
  listElem.classList.add('item');
  return listElem;
})

list.append(...elems);