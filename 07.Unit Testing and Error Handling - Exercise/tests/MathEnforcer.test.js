const { expect } = require('chai');
const { mathEnforcer } = require('../04. Math Enforcer');

describe('mathEnforcer', () => {

    describe('AddFive', () => {
        it('should return undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive('word')).to.be.equal(undefined);
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
            expect(mathEnforcer.addFive([1])).to.be.equal(undefined);
        })
        it('should work with floats', () => {
            expect(mathEnforcer.addFive(6.78)).to.be.closeTo(11.78, 0.01);
        })
        it('should work with positive integers', () => {
            expect(mathEnforcer.addFive(11)).to.be.equal(16);
        })
        it('should work with negative integers', () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        })
    });

    describe('subtractTen', () => {
        it('should return undefined	If the parameter is NOT a number"', () => {
            expect(mathEnforcer.subtractTen('3')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen([1])).to.be.equal(undefined);
        })
        it('should return the result if the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(18.14)).to.be.closeTo(8.14, 0.01)
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        })
    });

    describe('sum', () => {
        it('should return undefined	If any of parameters is NOT a number', () => {
            expect(mathEnforcer.sum('4', 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum(5, {})).to.be.equal(undefined);
            expect(mathEnforcer.sum([1], 34)).to.be.equal(undefined);
        })
        it('should return the result if the parameters are a numbers', () => {
            expect(mathEnforcer.sum(3, 2)).to.be.equal(5);
            expect(mathEnforcer.sum(66.78 ,33.52)).to.be.closeTo(100.3, 0.01);
            expect(mathEnforcer.sum(-1, -10)).to.be.equal(-11);
        })
    })

});
