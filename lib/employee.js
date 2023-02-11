class Employee {

    constructor(employeeName, employeeId, employeeEmail){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
        this.title = "Employee"
    };


    getEmployeeName() {
        return this.employeeName;
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