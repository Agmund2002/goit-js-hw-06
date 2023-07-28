function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

elements.createBtn.addEventListener('click', createBoxes);
elements.destroyBtn.addEventListener('click', destroyBoxes);

let step = 20;

function createBoxes(evt) {
  let boxCounter = [];

  const {previousElementSibling} = evt.currentTarget;

  if (previousElementSibling.value <= 0 || previousElementSibling.value > 100) {
    return alert('It is not possible to create more than 100 and less than 1 item!');
  }

  for (let i = 1; i <= previousElementSibling.value; i++) {
    step += 10;
    boxCounter.push(`<div style="width: ${step}px; height: ${step}px; background-color: ${getRandomHexColor()}; margin: 10px;"></div>`)
  }

  elements.boxes.insertAdjacentHTML("beforeend", boxCounter.join(''))
}

function destroyBoxes() {
  elements.boxes.innerHTML = '';
  step = 20;
}