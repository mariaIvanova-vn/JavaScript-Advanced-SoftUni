function add(num) {
    return (a) => a + num;
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));
