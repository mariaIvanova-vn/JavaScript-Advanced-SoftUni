let { companyAdministration } = require('./companyAdministration');
let { expect, assert } = require('chai');


describe("companyAdministration Tests ", () => {
    describe("hiringEmployee ", () => {
        it("valid position", () => {
            expect(companyAdministration.hiringEmployee("Ivan", "Programmer", 3)).to.be.equal("Ivan was successfully hired for the position Programmer.");
            expect(companyAdministration.hiringEmployee("Ivan", "Programmer", 5)).to.be.equal("Ivan was successfully hired for the position Programmer.");
            expect(companyAdministration.hiringEmployee("Ivan", "Programmer", 2)).to.be.equal("Ivan is not approved for this position.");
        });
        it("unvalid position", () => {
            expect(() => companyAdministration.hiringEmployee("Ivan", "aaa", 3)).to.throw("We are not looking for workers for this position.")
        });
    });
    describe("calculateSalary ", () => {
        it("Invalid hours", () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary('10')).to.throw("Invalid hours");
        });
        it("valid hours", () => {
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);
            expect(companyAdministration.calculateSalary(160)).to.eq(2400);
            expect(companyAdministration.calculateSalary(0)).to.eq(0);
        });
        it("valid hours bigger than 160", () => {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        });
    });
    describe("firedEmployee ", () => {
        it("work successful", () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1)).to.deep.equal('Petar, George');
        });
        it("throw Error", () => {
            expect(() => companyAdministration.firedEmployee('10', 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'string')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
        });
    });
});

