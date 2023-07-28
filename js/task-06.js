const textInput = document.querySelector('input[data-length="6"]');

textInput.addEventListener('blur', handlerInput);

function handlerInput(evt) {
    const {value, dataset, classList} = evt.currentTarget;

    if (value.length > dataset.length) {
        classList.remove('valid');
        classList.add('invalid');
    } else if (value.length <= dataset.length && value.length > 0) {
        classList.remove('invalid');
        classList.add('valid');
    } else {
        classList.remove('invalid');
        classList.remove('valid');
    }
}