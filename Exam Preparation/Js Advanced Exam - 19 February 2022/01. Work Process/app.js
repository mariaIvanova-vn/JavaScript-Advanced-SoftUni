function solve() {                         //60/100
    const input = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        dateOfBirth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')
    };

    const tableBody = document.getElementById("tbody");
    const sum = document.getElementById("sum");
    let totalSum = 0;

    let hireWorker = document.getElementById('add-worker');
    hireWorker.addEventListener('click', (event) => {
        event.preventDefault();

        let firstName = input.firstName.value;
        let lastName = input.lastName.value;
        let email = input.email.value;
        let dateOfBirth = input.dateOfBirth.value;
        let position = input.position.value;
        let salary = input.salary.value;


        if (firstName == '' || lastName == '' || email == '' || dateOfBirth == '' || position == '' || salary == '') {
            return;
        }

        let tr = document.createElement('tr');
        tr.className = "row";
        tr.innerHTML = `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${dateOfBirth}</td>
        <td>${position}</td>
        <td>${salary}</td>
          <td>
           <button class="fired">Fired</button>
           <button class="edit">Edit</button> 
          </td>
        </tr>`

        tableBody.appendChild(tr);

        input.firstName.value = '';
        input.lastName.value = '';
        input.email.value = '';
        input.dateOfBirth.value = '';
        input.position.value = '';
        input.salary.value = '';


        totalSum += salary;
        


        const firedBtn = tr.querySelector('.fired');
        firedBtn.addEventListener('click', () => {
            tableBody.remove();
            editBtn.remove();
            firedBtn.remove();
            total-=salary; 
        })

        const editBtn = tr.querySelector('.edit');
        editBtn.addEventListener('click', () => {
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.email.value = email;
            input.dateOfBirth.value = dateOfBirth;
            input.position.value = position;
            input.salary.value = salary;
            tr.remove();
        })

        sum.textContent = totalSum.toFixed(2);
    })
}
