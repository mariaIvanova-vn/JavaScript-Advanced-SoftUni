
function solve(nestedArray) {

    let sum = 0;

    for (let row = 0; row < nestedArray.length; row++) {
        for (let col = 0; col < nestedArray[row].length; col++) {


            if (row < nestedArray.length - 1) {
                if (nestedArray[row][col] === nestedArray[row + 1][col]) {
                    sum++;
                }
            }

            if (nestedArray[row][col] === nestedArray[row][col + 1]) {
                sum++;
            }
        }
    }
    return sum;
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));