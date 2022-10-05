function validate() {
    let inputEmail = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

    let validate = function (event) {
        if (pattern.test(event.currentTarget.value)) {
            event.currentTarget.removeAttribute('class');
        } else {
            event.currentTarget.classList.add('error');
        }
    }
    inputEmail.addEventListener('change', validate);
}