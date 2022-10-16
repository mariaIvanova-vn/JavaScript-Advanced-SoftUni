function autoCompany(array) {
    let carRegister = {};

    array.forEach(car => {
        let [brand, model, qty] = car.split(' | ');

        if (!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }
        if (!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = 0;
        }
        carRegister[brand][model] += Number(qty);
    });
    for (let brand in carRegister) {
        console.log(brand);
        Object.entries(carRegister[brand])
            .forEach(element => console.log('###' + element[0] + ' -> ' + element[1]));
    }
}