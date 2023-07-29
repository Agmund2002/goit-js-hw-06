const textInput = document.querySelector('input[data-length="6"]');

textInput.addEventListener('blur', handlerInput);

function handlerInput(evt) {
    const {value, dataset, classList} = evt.currentTarget;

    if (value.length === Number(dataset.length)) {
        classList.add('valid');
        classList.remove('invalid');
    } else {
        classList.add('invalid');
        classList.remove('valid');
    }
}
