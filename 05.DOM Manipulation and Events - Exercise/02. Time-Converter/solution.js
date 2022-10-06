function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (let button of buttons) {
        button.addEventListener('click', (event => {
            let value = Number(event.target.parentElement.querySelector('input[type=text]').value);
            let btnType = event.target.id;

            if (btnType === 'daysBtn') {
                calculate(value);
            } else if (btnType === 'hoursBtn') {
                calculate(value / 24);
            } else if (btnType === 'minutesBtn') {
                calculate(value / 24 / 60);
            } else if (btnType === 'secondsBtn') {
                calculate(value / 24 / 60 / 60);
            }
        }))
    }
    function calculate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
        let minutes = value * 24;
        for (let input of inputs) {
            input.value = minutes;
            minutes *= 60;
        }
    }
}