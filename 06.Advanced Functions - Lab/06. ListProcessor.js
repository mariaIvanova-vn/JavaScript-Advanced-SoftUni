function listProcessor(input){
    let processor = (function () {
        let result = [];

        return function processor(data) {
            let [command, value] = data.split(' ');

            let process = {
                add: () => result.push(value),
                remove: () =>result.splice(result.indexOf(value), 1),
                print: () => console.log(result.join(',')),
            }
            process[command].call(value);
        }
    })();

    for (let x of input) {
        processor(x);
    }
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])