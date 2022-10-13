const { expect } = require('chai');
const { rgbToHexColor } = require('../06. RGB to Hex');

describe('rgbToHexColor', () => {
    it('convert to black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    it('convert to white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })

    it('return undefind for missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    })

    it('return undefind for out of range', () => {
        expect(rgbToHexColor(-1,0, 0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,258,0)).to.be.undefined;
    })

    it('return undefind for string', () => {
        expect(rgbToHexColor('1',0, 0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
    })

    it('return undefind for float', () => {
        expect(rgbToHexColor(1.1,0, 0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
    })
});