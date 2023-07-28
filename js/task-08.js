const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerForm);

function handlerForm(evt) {
    evt.preventDefault();

    const {email, password} = evt.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    const dataUser = {};

    dataUser[form.firstElementChild.textContent.trim()] = email.value;
    dataUser[form.firstElementChild.nextElementSibling.textContent.trim()] = password.value;

    console.log(dataUser);

    form.reset();
}
