let { flowerShop } = require('./flowerShop');
let { expect, assert } = require('chai');

describe("flowerShop Tests ", () => {
    describe("calcPriceOfFlowers", () => {
        it("buy a flower", () => {
            expect(flowerShop.calcPriceOfFlowers('aaa', 4, 4)).to.be.equal(`You need $16.00 to buy aaa!`)
        });
        it("throw an error", () => {
            expect(() => flowerShop.calcPriceOfFlowers(5, 4, 4)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers(4.4, 4.7, 4.8)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('aaa', '4', 4)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers({}, 4, {})).to.throw("Invalid input!");
        })
    });

    describe("checkFlowersAvailable", () => {
        it("work", () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable('aaa', ["Rose", "Lily", "Orchid"])).to.be.equal(`The aaa are sold! You need to purchase more!`);
        })
    });

    describe("sellFlowers", () => {
        it("throw an error", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1')).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 10)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(5, 5)).to.throw("Invalid input!");
        })
        it("correct inputs", () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.be.equal(`Rose / Orchid`)
        })
    });
});
