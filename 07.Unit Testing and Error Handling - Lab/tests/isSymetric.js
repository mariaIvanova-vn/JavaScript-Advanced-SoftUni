const { expect } = require('chai');
const { isSymmetric } = require('../05. Check for Symmetry');

describe('isSymmetric', ()=>{
    it('should return false, if input is not an array', ()=>{
        //Arrange
        let input = 'Not array';

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.false;
    });
    it('return false for non-symmetric numeric array ', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    });
    it('should return true, if input is asymetric array', ()=>{
        //Arrange
        let input = [1,2,3,4,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    });

    it('works with symmetric odd-length array ', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    });

    it('works with symmetric string array ', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    });


    it('returns false for string param ', () => {
        expect(isSymmetric(['abba'])).to.be.true
    });

    it('returns false for type mismatched elements ', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false
    });
})