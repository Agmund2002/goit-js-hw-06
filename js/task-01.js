const list = document.querySelector('#categories');
// console.dir(list);
console.log('Number of categories:', list.children.length);

const itemList = document.querySelectorAll('.js-item');
itemList.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})