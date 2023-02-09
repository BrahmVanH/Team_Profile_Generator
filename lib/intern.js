const Employee = require('./employee');

class Intern extends Employee {

    constructor(employeeName, employeeId, employeeEmail, schoolName){
        super(employeeName, employeeId, employeeEmail);
        this.schoolName = schoolName;
        this.title = "Intern";
    }

    getInternSchoolName() {
        return this.schoolName;
    }

    
}


module.exports = Intern;