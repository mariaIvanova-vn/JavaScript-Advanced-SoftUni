function solve(array){
array.sort((a,b) => a-b);

array.splice(2);
console.log(array)
}

solve([30, 15, 50, 5]);