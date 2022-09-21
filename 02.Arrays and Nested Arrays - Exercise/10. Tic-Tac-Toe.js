function solve(input) {
    let initialBoard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X';

    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);

        if (initialBoard[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        initialBoard[currRow][currCol] = player;

        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                initialBoard[i][0] === player &&
                initialBoard[i][1] === player &&
                initialBoard[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                initialBoard[0][i] === player &&
                initialBoard[1][i] === player &&
                initialBoard[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }

        //check left to right
        if (
            initialBoard[0][0] === player &&
            initialBoard[1][1] === player &&
            initialBoard[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        //check right to left
        else if (
            initialBoard[0][2] === player &&
            initialBoard[1][1] === player &&
            initialBoard[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        let theresFalse = false;

        for (let row = 0; row < initialBoard.length; row++) {
            if (initialBoard[row].includes(false)) {
                theresFalse = true;
            }
        }

        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function printMatrix() {
        for (let row = 0; row < initialBoard.length; row++) {
            console.log(initialBoard[row].join('\t'));
        }
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])