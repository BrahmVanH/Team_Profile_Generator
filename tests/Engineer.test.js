const Engineer = require("../lib/engineer");


describe("Engineer", () => {
    describe("getGitHubUserName", () => {
        it("should return the engineer's GitHub username as entered", () => {

            const result = new Engineer("John", 4, "bRanzo@ymail.com", "JavaBean12")
            expect(result.getGitHubUserName()).toEqual("JavaBean12");
        })
    })
});