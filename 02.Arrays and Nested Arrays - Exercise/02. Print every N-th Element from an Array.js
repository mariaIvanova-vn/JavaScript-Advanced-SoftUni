function solve(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
}


let res = solve(['5', '20', '31', '4', '20'], 2);
console.log(res);

solve(['dsa', 'asd', 'test', 'tset'], 2);