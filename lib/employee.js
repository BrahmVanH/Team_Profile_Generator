class Employee {

    constructor(employeeName, employeeId, employeeEmail){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
        this.title = "Employee"
    };

    printInfo() {
        console.log(`Employee Name: ${this.employeeName}\nEmployee ID: ${this.employeeId}\nEmail Address: ${this.email}`)
    };

    getEmployeeName() {
        return this.employeeName;
    };

    getEmployeeType() {
        return this.employeeType;
    };

    getEmployeeId() {
        return this.employeeId;
    };

    getEmployeeEmail() {
        return this.employeeEmail;
    };

    getTitle() {
        return this.title;
    };


}

module.exports = Employee;