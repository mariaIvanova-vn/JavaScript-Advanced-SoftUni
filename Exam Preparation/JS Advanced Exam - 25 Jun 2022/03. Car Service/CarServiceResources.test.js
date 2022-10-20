let { carService } = require('./03. Car Service_Resources');
let { expect, assert } = require('chai');

describe("carService Tests ", ()=> {
    describe("isItExpensive", ()=> {
        it("will cost more money ", ()=> {
            expect(carService.isItExpensive("Engine")).to.be.equal("The issue with the car is more severe and it will cost more money");
            expect(carService.isItExpensive("Transmission")).to.be.equal("The issue with the car is more severe and it will cost more money");
        })
        it("price will be a bit cheaper", ()=> {
            expect(carService.isItExpensive("eee")).to.be.equal("The overall price will be a bit cheaper");
        })
     });

     describe("discount", ()=> {
        it("throw an error", ()=> {
             expect(() => carService.discount('3',3)).to.throw("Invalid input");
             expect(() => carService.discount('3',[])).to.throw("Invalid input");
        })
        it("cannot apply a discount", ()=> {
            expect(carService.discount(2,3)).to.be.equal("You cannot apply a discount");
            expect(carService.discount(1,3)).to.be.equal("You cannot apply a discount");
        })
        it("cannot apply a discount", ()=> {
            expect(carService.discount(2,3)).to.be.equal("You cannot apply a discount");
            expect(carService.discount(5,3)).to.be.equal(`Discount applied! You saved 0.44999999999999996$`);
            expect(carService.discount(10,3)).to.be.equal(`Discount applied! You saved 0.8999999999999999$`);
        })
     });

     describe("partsToBuy", ()=> {
        it("work successful ", ()=> {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"])).to.deep.equal(145);
        })
     });
});
