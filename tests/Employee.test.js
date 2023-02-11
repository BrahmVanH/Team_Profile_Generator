const Employee = require("../lib/employee");


describe("Employee", () => {
    describe("getEmployeeName", () => {
        it("should return the employee's name as entered", () => {

            const result = new Employee("John", 4, "bRanzo@ymail.com");
            expect(result.getEmployeeName()).toEqual("John");
        })
    })

    describe("getEmployeeId", () => {
        it("should return the employee ID number as entered", () => {
            
            const result = new Employee("John", 4, "bRanzo@ymail.com");
            expect(result.getEmployeeId()).toEqual(4);
        })
    });

    describe("getEmployeeEmail", () => {
        it("should return the employee email address as entered", () => {
            
            const result = new Employee("John", 4, "bRanzo@ymail.com");
            expect(result.getEmployeeEmail()).toEqual("bRanzo@ymail.com");
        })
    });

    describe("getTitle", () => {
        it("should return the employee's title", () => {
            
            const result = new Employee("John", 4, "bRanzo@ymail.com");
            expect(result.getTitle()).toEqual("Employee");
        })
    });
    
});