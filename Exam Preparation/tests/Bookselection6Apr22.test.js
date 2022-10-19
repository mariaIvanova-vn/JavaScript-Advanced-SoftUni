let { bookSelection } = require('../JS Advanced Exam - 6 Apr 2022/03. Book selection/bookSelection');
let { expect, assert } = require('chai');

describe("bookSelection Tests ", () => {
    describe("isGenreSuitable ", () => {
        it("genre is suitable", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 18)).to.be.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Horror", 18)).to.be.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Comedy", 10)).to.be.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Comedy", 12)).to.be.equal("Those books are suitable");
        });
        it("genre is not suitable", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
    });

    describe("isItAffordable ", () => {

        it("Book bought successful", () => {
            expect(bookSelection.isItAffordable(10, 18)).to.be.equal('Book bought. You have 8$ left');
        });
        it("not enough money", () => {
            expect(bookSelection.isItAffordable(10, 8)).to.be.equal("You don't have enough money");
        });
        it("throw Error if price or budget are not a number", () => {
            expect(()=>bookSelection.isItAffordable('10', 10)).to.throw("Invalid input")
            expect(()=>bookSelection.isItAffordable(10, '10')).to.throw("Invalid input");
        });
    });
    describe("suitableTitles ", () => {

        it("throw Error", () => {
            expect(()=>bookSelection.suitableTitles('10', 10)).to.throw("Invalid input")
            expect(()=>bookSelection.suitableTitles([], 10)).to.throw("Invalid input")
            expect(()=>bookSelection.suitableTitles([])).to.throw("Invalid input")
            expect(()=>bookSelection.suitableTitles({}, '10')).to.throw("Invalid input")
            expect(()=>bookSelection.suitableTitles([], [])).to.throw("Invalid input")
        });
        it("work successful", () => {
            expect(bookSelection.suitableTitles([ title= "The Da Vinci Code", genre= "Thriller" ],"Thriller")).to.deep.equal([]);
        });
    });

})