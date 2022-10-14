let { isOddOrEven } = require('../02. Even Or Odd');
const { expect } = require('chai');

describe('If invalid input', () => {

    it('should return undefined if input is number', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    })

    it('should return undefined if input is object', () => {
        expect(isOddOrEven({ name: 'Maria' })).to.be.equal(undefined);
    })
})

describe('If valid input', () => {

    it('should return even if string has even number of symbols', () => {
        expect(isOddOrEven('Dada')).to.be.equal('even');
    })

    it('should return odd if string has odd number of symbols', () => {
        expect(isOddOrEven('Dadad')).to.be.equal('odd');
        expect(isOddOrEven('I am here!')).to.be.equal('even');
    })
})