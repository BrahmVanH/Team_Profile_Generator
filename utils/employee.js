class Employee {

    constructor(employeeName, employeeType, employeeId, email){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
    }

    printInfo() {
        console.log(`Employee Name: ${this.employeeName}\nEmployee ID: ${this.employeeId}\nEmail Address: ${this.email}`)
    }
}

module.exports = Employee;