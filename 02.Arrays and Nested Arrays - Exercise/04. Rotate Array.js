function solve(array, num){

    for(let i=0; i<num; i++){
        let end = array.pop();
        array.unshift(end);
    }

    console.log(array.join(' '));
}

solve(['1', '2', '3', '4'], 2);