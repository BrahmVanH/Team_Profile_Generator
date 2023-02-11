const Manager = require("../lib/teamManager");


describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("should return the engineer's GitHub username as entered", () => {

            const result = new Manager("John", 4, "bRanzo@ymail.com", 14)
            expect(result.getOfficeNumber()).toEqual(14);
        })
    })
});