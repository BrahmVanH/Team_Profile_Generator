const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, email, gitHubUserName){
        super(employeeName, "Engineer", employeeId, email)
        this.gitHubUserName = gitHubUserName;
    }

}

module.exports = Engineer;