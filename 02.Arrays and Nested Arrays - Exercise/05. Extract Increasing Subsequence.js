function solve(array) {
let result = [];
let biggestOne = array.shift();
result.push(biggestOne);

for(el of array){
    if(el >= biggestOne){
        result.push(el);
        biggestOne = el;
    }
}
return result;
}

solve([1, 2, 3, 4]);