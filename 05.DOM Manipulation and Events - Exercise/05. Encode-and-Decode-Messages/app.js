function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', (event) => {
        let newMessage = '';
        let currText = event.target.parentElement.children[1].value;

        for (let i = 0; i < currText.length; i++) {
            let currCh = currText[i].charCodeAt();
            newMessage += String.fromCharCode(currCh + 1);
        }
        let text = document.querySelectorAll('textarea');
        let resultText = text[1];
        resultText.value = newMessage;
        let currTextArea = text[0];
        currTextArea.value = '';
    });
    buttons[1].addEventListener('click', (event) => {
        let newMessage = '';
        let currArea = event.target.parentElement.children[1];
        let currText = currArea.value;

        for (let i = 0; i < currText.length; i++) {
            let currCh = currText[i].charCodeAt();
            newMessage += String.fromCharCode(currCh - 1);
        }
        currArea.value=newMessage;
    });
}