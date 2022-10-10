function argumentInfo(...input) {
    let result = {};
    for (let element of input) {
        let type = typeof (element);
        console.log(`${type}: ${element}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] += 1;
    }
    let otput='';
    for (let [k, v] of Object.entries(result)) {
        otput+=`${k} = ${v}\n`;
    }
    console.log(otput);
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })