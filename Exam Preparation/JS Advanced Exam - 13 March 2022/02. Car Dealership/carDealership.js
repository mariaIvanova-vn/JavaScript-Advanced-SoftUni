class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower=Number(horsepower);
        price=Number(price);
        mileage=Number(mileage);
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {

    }

    currentCar() {

    }

    salesReport(criteria) {

    }
}


//const CarDealership = result;
let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
//dealership.addCar('Mercedes C63', 300, 29000, 187000);
//dealership.addCar('Audi A3', 120, 4900, 240000);

//assert.equal(dealership.sellCar('Toyota Corolla', 230000), "Toyota Corolla was sold for 3500.00$");
console.table(dealership)