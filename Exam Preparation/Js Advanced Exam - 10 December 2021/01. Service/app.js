window.addEventListener('load', solve);   //100/100

function solve() {

    const input = {
        productType: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    };

    let receivedOrders = document.querySelector('#received-orders');
    let completedOrders = document.querySelector('#completed-orders');

    let sendButton = document.querySelector('#right form button');
    sendButton.addEventListener('click', (event) => {
        event.preventDefault();

        let productType = input.productType.value;
        let description = input.description.value;
        let clientName = input.clientName.value;
        let clientPhone = input.clientPhone.value;


        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }

        input.productType.value = '';
        input.description.value = '';
        input.clientName.value = '';
        input.clientPhone.value = '';

        let div = document.createElement('div');
        div.classList.add('container');

        let h2El = document.createElement('h2');
        h2El.textContent = `Product type for repair: ${productType}`;

        let h3El = document.createElement('h3');
        h3El.textContent = `Client information: ${clientName}, ${clientPhone}`;

        let h4El = document.createElement('h4');
        h4El.textContent = `Description of the problem: ${description}`;

        let startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';

        let finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        startBtn.addEventListener('click', () => {
            startBtn.disabled=true;
            finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', () => {
            div.remove();
            completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        });

        div.appendChild(h2El);
        div.appendChild(h3El);
        div.appendChild(h4El);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        receivedOrders.appendChild(div);

    });

    let clearButton = document.querySelector('#wrapper section button');
    clearButton.addEventListener('click', () => {
        completedOrders = document.getElementById('completed-orders');
        completedOrders.innerHTML = '';
    });
}