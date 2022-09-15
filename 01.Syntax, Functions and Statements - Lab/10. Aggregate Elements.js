function solve(numbers) {

    aggregate(numbers, 0, (a,b) => a+b);
    aggregate(numbers, 0, (a,b) => a+1/b);
    aggregate(numbers, '', (a,b) => a+b);

    function aggregate(arr, initVal, func) {
        let result = initVal;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
        console.log(result);
    }
}

solve([1,2,4])