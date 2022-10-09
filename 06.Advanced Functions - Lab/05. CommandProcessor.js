function commandProcessor() {
    let input = '';

    return {
        append: (str) => input += str,
        removeStart: (n) => input = input.substring(n),
        removeEnd: (n) => input = input.substring(0, input.length - n),
        print: () => console.log(input)
    }
}


let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();