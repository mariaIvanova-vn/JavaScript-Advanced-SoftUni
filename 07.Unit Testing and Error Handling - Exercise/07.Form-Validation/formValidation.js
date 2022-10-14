function validate() {
    document.getElementById('company').addEventListener('change', () => {
        let companyInfo = document.getElementById('companyInfo');
        if (document.getElementById('company').checked == false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    });

    let submit = document.getElementById('submit');
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        invalidFields = [];

        let checkBox = document.querySelector('#company');
        let userName = document.getElementById('username');
        let usernameRegex = /^[A-Za-z0-9]{3,20}/;
        if (!usernameRegex.test(userName.value)) {
            invalidFields.push(userName);
        }
        let email = document.getElementById('email');
        let emailRegex =  /^[^@.]+@[^@]*\.[^@]*$/;
        if (!emailRegex.test(email.value)) {
            invalidFields.push(email);
        }
        let password = document.getElementById('password');
        let confirmPass = document.getElementById('confirm-password');
        let passRegex = /^[\w]{5,15}$/;
        if (!passRegex.test(password.value) || confirmPass.value !== password.value) {
            invalidFields.push(password);
            invalidFields.push(confirmPass);
        }

        if (checkBox.checked) {
            let companyId = document.getElementById('companyNumber');
            let companyRegex = /^[0-9]{4}/;
            if (!companyRegex.test(companyId.value)) {
                invalidFields.push(companyId)
            }
        }
        invalidFields.forEach(x => x.style.borderColor = 'red');
        !invalidFields.length ? document.querySelector('#valid').style.display = 'block' :
            document.querySelector('#valid').style.display = 'none';
    })
}
