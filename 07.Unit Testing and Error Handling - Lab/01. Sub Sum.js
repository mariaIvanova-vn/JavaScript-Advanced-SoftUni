function subSum(array, start = 0, end = array.length ) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (start < 0) { start = 0; }

    if (end >= array.length) { end = array.length; }

    let result = 0;
    for (let i = start; i < end; i++) {
        result += Number(array[i]);
    }
    return result;
}

let sum=subSum([1,2,3,4,5,6])
console.log(sum);