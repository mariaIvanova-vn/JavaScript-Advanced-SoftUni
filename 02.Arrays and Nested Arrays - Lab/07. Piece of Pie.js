function solve(pies, first, second){
let indexOfFirst = pies.indexOf(first);
let indexOfSecond = pies.indexOf(second);

return pies.slice(indexOfFirst, indexOfSecond + 1);
}


let result = solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

console.log(result);