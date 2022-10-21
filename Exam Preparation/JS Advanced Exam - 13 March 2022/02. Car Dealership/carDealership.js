class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
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
        let car = this.availableCars.find(c => c.model == model);
        if (car == undefined) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice=0;
        if (car.mileage > desiredMileage) {
            if (car.mileage - desiredMileage <= 40000) {
               soldPrice= car.price * 0.95;
            } else if (car.mileage - desiredMileage > 40000) {
              soldPrice=  car.price * 0.9;
            }
        }else{
            soldPrice=car.price;
        }
       
        let carIndex = this.availableCars.findIndex(c => c.model == model);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }
        let output = ["-Available cars:"];
        this.availableCars.map((iterator) => output.push(`---${iterator.model} - ${iterator.horsepower} HP - ${iterator.mileage.toFixed(2)} km - ${iterator.price.toFixed(2)}$`));
        return output.join('\n');

    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        if (criteria == "horsepower") {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        if (criteria == "model") {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }
        let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        output.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.map(c => output.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        return output.join('\n');
    }
}
