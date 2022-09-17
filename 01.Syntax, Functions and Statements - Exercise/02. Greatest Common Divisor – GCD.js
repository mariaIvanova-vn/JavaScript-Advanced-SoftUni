function solve(num1, num2){
    let greatestDivisor;
    for(let i=num1; i>0; i--){
        if (num1 % i == 0 && num2 % i == 0) {
            greatestDivisor = i;
            break;
        }
    }
    console.log(greatestDivisor);
}

solve(15, 5)