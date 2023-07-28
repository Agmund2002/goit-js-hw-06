const elements = {
    textInput: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

const {textInput, output} = elements;

textInput.addEventListener('input', handlerInput);

function handlerInput(evt) {
    if (evt.currentTarget.value === '') {
        return output.textContent = 'Anonymous';
    }

    output.textContent = evt.currentTarget.value;
}