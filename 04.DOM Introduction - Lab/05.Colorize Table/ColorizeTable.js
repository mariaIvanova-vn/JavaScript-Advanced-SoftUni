function colorize() {
    let table = document.querySelectorAll('table tr');

    for (let i = 0; i < table.length; i++) {
        if (i % 2 === 1) {
            table[i].style.backgroundColor = "Teal";
        }
    }
}