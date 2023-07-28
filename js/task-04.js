const elements = {
    plusBtn: document.querySelector('button[data-action="increment"]'),
    minusBtn: document.querySelector('button[data-action="decrement"]'),
    result: document.querySelector('#value'),
}

let counterValue = 0;

elements.plusBtn.addEventListener('click', handlerPlus);
elements.minusBtn.addEventListener('click', handlerMinus);

function handlerPlus() {
    counterValue += 1;
    elements.result.textContent = counterValue;
}

function handlerMinus() {
    counterValue -= 1;
    elements.result.textContent = counterValue;
}