let { chooseYourCar } = require('./chooseYourCar');
let { expect, assert } = require('chai');


describe("chooseYourCar", () => {
    describe("choosingType", () => {
        it("false", () => {
            expect(() => chooseYourCar.choosingType("xxxxxx", "xxxxx", 1999)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Sedan", "xxx", 555555)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "xxxxxxx", 5)).to.throw("Invalid Year!");
        })

        it("true", () => {
            expect(chooseYourCar.choosingType("Sedan", "xxxxx", 2011)).to.be.equal("This xxxxx Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "xxxxx", 1999)).to.be.equal("This Sedan is too old for you, especially with that xxxxx color.");
        })
       
    });

    describe("brandName", () => {
        it("true", () => {
            expect(chooseYourCar.brandName(["aaa", "bbb", "cccc"], 1)).to.be.equal(`aaa, cccc`);
        })
        it("false", () => {
            expect(() => chooseYourCar.brandName("aaaa", 5)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName([], -100)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(5, '-100')).to.throw("Invalid Information!");
        })       
    });

    describe("carFuelConsumption", () => {
        it("true", () => {
             expect(chooseYourCar.carFuelConsumption(222, 99)).to.be.equal(`The car burns too much fuel - 44.59 liters!`);
             expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
             expect(chooseYourCar.carFuelConsumption(10, 0.4)).to.be.equal(`The car is efficient enough, it burns 4.00 liters/100 km.`);
            
        })
        it("false", () => {
            expect(() => chooseYourCar.carFuelConsumption("aaa",55)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(5,'xxxxxxx')).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(55,-98)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-555,98)).to.throw("Invalid Information!");
            
        })
    });
});
