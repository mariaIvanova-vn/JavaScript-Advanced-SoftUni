function solve (x1, y1, x2, y2) {
    let isValid = false;
    let distance = function (x1, y1, x2 = 0, y2 = 0) {
 
        let distX = Math.pow((x2 - x1), 2);
        let distY = Math.pow((y2 - y1), 2);

        let result = Math.sqrt(distX + distY);

        if (Number.isInteger(result)) {
            isValid = true;
        }

        return isValid;
    };

    let firstValidityStatus = (distance(x1, y1)) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstValidityStatus}`);

    let secondValidityStatus = (distance(x2, y2)) ? 'valid' : 'invalid';
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondValidityStatus}`);

    let thirdValidityStatus = (distance(x1, y1, x2, y2)) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdValidityStatus}`);
}


solve(3, 0, 0, 4)