const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, gitHubUserName){
        super(employeeName, employeeId, employeeEmail);
        this.gitHubUserName = gitHubUserName;
        this.title = "Engineer";
    };

    getGitHubUserName() {
        return this.gitHubUserName;
    };


}

module.exports = Engineer;