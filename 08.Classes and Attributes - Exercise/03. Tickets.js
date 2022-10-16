function solve(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let tickets = [];
    for (let input of array) {
        let [destination, price, status] = input.split('|');

        tickets.push(new Ticket(destination, price, status));
    }
    tickets.sort((a, b) => {
        if (criterion == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criterion == 'status') {
            return a.status.localeCompare(b.status);
        } else {
            return a.price - b.price;
        }
    })
    return tickets;
}

