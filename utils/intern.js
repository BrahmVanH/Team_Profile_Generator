const Employee = require('./employee');

class Intern extends Employee {

    constructor(employeeName, employeeId, email, school){
        super(employeeName, "Intern", employeeId, email);
        this.school = school;
    }
}


module.exports = Intern;