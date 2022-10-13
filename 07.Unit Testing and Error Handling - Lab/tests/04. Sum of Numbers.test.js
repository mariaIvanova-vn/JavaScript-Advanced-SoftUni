const { expect } = require('chai');
const { sum } = require('../04. Sum of Numbers');

describe('Sum of Numbers', () => {
    it('return sum of the values of all elements ', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    });

    it('should return false', () => {
        expect(sum([1,1])).not.be.equal(7).false;
    });

})