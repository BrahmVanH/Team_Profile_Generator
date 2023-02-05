/* FLOW:
    Initiate 
    Prompts for manager's information
    Process manager's information 
    whatNext
    prompt for engineers information
    process
    whatnext
    process interns information
    whatnext
    Build HTML */


const Employee = require('./employee');
const Manager = require('./teamManager');
const Intern = require('./intern');
const teamManagerQuestions = require('./teamManagerPrompt');
const engineerQuestions = require('./engineerPrompt');
const internQuestions = require('./internPrompt');


const askForManager = () => {
    return inquirer.prompt(teamManagerQuestions);
}

const askForEngineer = () => {
    return inquirer.prompt(engineerQuestions);
}

const askForIntern = () => {
    return inquirer.prompt(internQuestions);
}





const teamManager = new Manager(answer.teamManagerName, answer.teamManagerEmployeeId, answer.teamManagerEmail, answer.teamManagerOfficeNumber);
const 
