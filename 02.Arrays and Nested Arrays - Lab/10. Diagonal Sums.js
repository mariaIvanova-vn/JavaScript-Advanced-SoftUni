function solve(nestedArray) {
    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;

    for (let row = 0; row < nestedArray.length; row++) {

        rightDiagonalSum += nestedArray[row][row];
        leftDiagonalSum += nestedArray[row][nestedArray[row].length - 1 - row];
    }

    let result = rightDiagonalSum + ' ' + leftDiagonalSum;
    return result;
}


let res = solve([[20, 40],
       [10, 60]]);

       console.log(res);