function solve(array){
let result = '';

for(let i = 0; i < array.length; i+=2){
    result += array[i] + ' ';
}
console.log(result);
}

solve(['5', '10']);
solve(['20', '30', '40', '50', '60']);