const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, officeNumber){
        super(employeeName, employeeId, employeeEmail)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }

    
}

   

module.exports = Manager;