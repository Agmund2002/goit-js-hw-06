const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('.js-gallery');

const listElem = images.map(item => {
  return `
  <li class="js-gallery-item">
  <img src=${item.url} alt=${item.alt} width=400>
  </li>
  `
}).join('');

list.insertAdjacentHTML("beforeend", listElem);

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.gap = '40px';
list.style.flexWrap = 'wrap';

const listItem = document.querySelectorAll('.js-gallery-item');

listItem.forEach(item => {
  item.style.display = 'flex';
});