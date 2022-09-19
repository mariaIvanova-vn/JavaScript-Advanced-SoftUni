function solve(array){
let result = [];

for( let num of array){
    if(num<0){
        result.unshift(num);
    }
    else{
        result.push(num);
    }
}
for(let num of result){
    console.log(num);
}
}

solve([7, -2, 8, 9])