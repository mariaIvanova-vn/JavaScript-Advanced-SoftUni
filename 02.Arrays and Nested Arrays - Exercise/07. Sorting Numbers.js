function solve(array) {

    let result = [];
    let sorted = array.sort((a, b) => a - b);

    while(array.length > 0) {

        result.push(sorted.shift());
        result.push(sorted.pop());
    }

    return result;
}

let res = solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(res)