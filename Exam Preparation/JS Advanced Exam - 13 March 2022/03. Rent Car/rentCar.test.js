let { rentCar } = require('./rentCar');
let { expect, assert } = require('chai');


describe("rentCar Tests ", () => {
    describe("searchCar", () => {
        it("There is a car", () => {
            expect(rentCar.searchCar(['bbb'], 'bbb')).to.be.equal(`There is 1 car of model bbb in the catalog!`)
        });
        it("throw an error", () => {
            expect(() => rentCar.searchCar(['bbb'], 4)).to.throw("Invalid input");
            expect(() => rentCar.searchCar('aaa', '4')).to.throw("Invalid input");
            expect(() => rentCar.searchCar({}, '4')).to.throw("Invalid input");
            expect(() => rentCar.searchCar(1, 'aaa')).to.throw("Invalid input");
            expect(() => rentCar.searchCar(['bbb'], 'aa')).to.throw("There are no such models in the catalog!");
        })
    });

    describe("calculatePriceOfCar", () => {
        it("throw an error", () => {
            expect(() => rentCar.calculatePriceOfCar('bbb', 4.2)).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar([], 4)).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar(3, 4)).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar('bbb', '4.2')).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar({}, 4)).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar('aaa', 4)).to.throw("No such model in the catalog!");
        })
        it("work", () => {
            expect( rentCar.calculatePriceOfCar('Toyota', 4)).to.be.equal(`You choose Toyota and it will cost $160!`)

        })
    });

    describe("checkBudget", () => {
        it("throw an error", () => {
            expect(() => rentCar.checkBudget(3.1,5.1,5.5)).to.throw("Invalid input");
            expect(() => rentCar.checkBudget('aaa',5,5.5)).to.throw("Invalid input");
            expect(() => rentCar.checkBudget({},{},5)).to.throw("Invalid input");
            expect(() => rentCar.checkBudget([],5,'ii')).to.throw("Invalid input");
        })
        it("correct inputs", () => {
            expect( rentCar.checkBudget(3,5,5)).to.be.equal(`You need a bigger budget!`)
            expect( rentCar.checkBudget(5,5,5)).to.be.equal(`You need a bigger budget!`)
            expect( rentCar.checkBudget(10,5,100)).to.be.equal(`You rent a car!`)
            expect( rentCar.checkBudget(10,5,50)).to.be.equal(`You rent a car!`)
        })
    });
});
