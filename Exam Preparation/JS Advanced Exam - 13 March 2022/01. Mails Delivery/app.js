//window.addEventListener("load", solve);

function solve() {

    const input = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    };
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', reset);

    let listOfMails = document.querySelector('.list-mails');
    let sendMails=document.querySelector('.sent-list');
    let deletedMails=document.querySelector('.delete-list')

    let recipientName = input.recipientName.value;
    let title = input.title.value;
    let message = input.message.value;

    if (title == '' || recipientName == '' || message == '') { return; }

    function add(event) {
        event.preventDefault();
        input.recipientName.value = '';
        input.title.value = '';
        input.message.value = '';

        let li = document.createElement('li');

        li.innerHTML = `<li>
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipientName}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>
        </li>`;

        listOfMails.appendChild(li);

        const sendBtn = document.getElementById('send');
        sendBtn.addEventListener('click', () => {
           // li.remove();

            let li = document.createElement('li');

        li.innerHTML = `<li>
            <span>To: ${recipientName}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>
        </li>`

            sendMails.appendChild(li);

        });
        const deleteBtn = document.getElementById('delete');
        deleteBtn.addEventListener('click', () => {

   let li = document.createElement('li');


        li.innerHTML = `<li>
        <span>To: ${recipientName}</span>
        <span>Title: ${title}</span>
        </li>`

        deletedMails.appendChild(li);
        })




    }

    function reset() {
        input.recipientName.value = '';
        input.title.value = '';
        input.message.value = '';
    }

}
solve()