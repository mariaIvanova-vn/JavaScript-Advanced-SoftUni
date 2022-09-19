function solve(array){
array.sort((a,b) => a-b);

return array.slice(array.length / 2);
}

let result = solve([4, 7, 2, 5]);

console.log(result);