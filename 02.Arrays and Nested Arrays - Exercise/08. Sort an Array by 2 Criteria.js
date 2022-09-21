function solve(array){
let sortArray = array.sort((a,b) => {
    if(a.length !== b.length){
        return a.length - b.length;
    }else{
        return a.localeCompare(b);
    }
})
console.log(sortArray.join("\n"));

// return array.sort((a,b) => {
//     a.length !== b.length ?
//     a.length - b.lengt : a.localeCompare(b)
// }).join("\n");

}


solve(['alpha', 'beta', 'gamma']);

//console.log(res)