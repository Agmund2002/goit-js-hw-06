const elements = {
  box: document.querySelector('.widget'),
  color: document.querySelector('.color'),
  btn: document.querySelector('.change-color')
}

elements.btn.addEventListener('click', handlerChangeColor);

function handlerChangeColor() {

  elements.box.parentElement.style.backgroundColor = getRandomHexColor();

  elements.color.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
