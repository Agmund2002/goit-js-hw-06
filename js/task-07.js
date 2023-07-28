const elements = {
    fontRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

elements.fontRange.addEventListener('input', handlerFont);

function handlerFont(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`;
}