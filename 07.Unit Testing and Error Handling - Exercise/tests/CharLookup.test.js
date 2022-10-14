const { expect } = require('chai');
const { lookupChar } = require('../03. Char Lookup');

describe('Char Lookup', () => {

    it('should return undefined', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
        expect(lookupChar('dada', 'aa')).to.be.equal(undefined);
        expect(lookupChar('dada', 1.2)).to.be.equal(undefined);
        expect(lookupChar({}, 1)).to.be.equal(undefined);
    })

    it('should return an "Incorrect index"', () => {
        expect(lookupChar('Maria', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('a', 5)).to.be.equal('Incorrect index');
    })

    it('should return the char at the specified index', () => {
        expect(lookupChar('Maria', 1)).to.be.equal('a');
    })
})