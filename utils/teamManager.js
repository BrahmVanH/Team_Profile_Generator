const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, email, officeNumber){
        super(employeeName, "Team Manager", employeeId, email)
        this.officeNumber = officeNumber
    }
}

   

module.exports = Manager;