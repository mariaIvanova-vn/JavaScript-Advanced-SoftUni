let { companyAdministration } = require('../Js Advanced Exam - 10 December 2021/03. Company Administration');
let { expect, assert } = require('chai');


describe("companyAdministration Tests ", ()=> {
    describe("hiringEmployee ", ()=> {
        it("valid position", ()=> {
            expect(companyAdministration.hiringEmployee("Ivan", "Programmer",3)).to.be.equal("Ivan was successfully hired for the position Programmer.");
        });
        it("valid position", ()=> {
            // TODO: …
        });
     });
     describe("calculateSalary ", ()=> {
        it("TODO …", ()=> {
            // TODO: …
        });
     });
     describe("firedEmployee ", ()=> {
        it("TODO …", ()=> {
            // TODO: …
        });
     });
});


