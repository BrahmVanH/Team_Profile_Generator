const Intern = require("../lib/intern");


describe("Intern", () => {
    describe("getInternSchoolName", () => {
        it("should return the intern's school name as entered", () => {

            const result = new Intern("John", 4, "bRanzo@ymail.com", "NMU")
            expect(result.getInternSchoolName()).toEqual("NMU");
        })
    })
});