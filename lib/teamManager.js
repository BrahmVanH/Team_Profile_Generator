const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, officeNumber){
        super(employeeName, employeeId, employeeEmail)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    
}

   

module.exports = Manager;