const inquirer = require('inquirer');
const teamManagerQuestions = require('./teamManagerPrompt');
const Manager = require('./teamManager');
const Engineer = require('./engineer')
const Intern = require('./intern');

const teamMembers = []

const askWhatNext = () => {
    inquirer.prompt([
        {
            name: 'whatNext',
            type: 'list',
            message: "What would you like to do next?",
            choices: ["Add an engineer to your team", "Add an intern to your team", "Finish building team"],
            
        },
    ])
    .then((input) => {
        if (input.whatNext === "Add an engineer to your team") {
            askForEngineer();
        } else if (input.whatNext === "Add an intern to your team") {
            askForIntern();
        } else {
            console.log("Finished");
            console.log(teamMembers);
            
        }
    })
}

const promptManager =  () => {
    inquirer
        .prompt(teamManagerQuestions)
            .then((input) => {
                const manager = new Manager(input.name, input.teamManagerEmployeeId, input.teamManagerEmail, input.teamManagerOfficeNumber )
                teamMembers.push(manager);
                askWhatNext();
            })
        
        
    
};


const askForEngineer = () => {
    inquirer
        .prompt([
            {
                name: 'engineerName',
                type: 'input',
                message: "Please enter your engineer's name",
               
            },
            {
                name: 'engineerEmployeeId',
                type: 'input',
                message: "Please enter your engineer's employee ID number.",
                
            },
            {
                name: 'engineerEmail',
                type: 'input',
                message: "Please enter your engineer's email address.",
               
            },
            {
                name: 'engineerOfficeNumber',
                type: 'number',
                message: "Please enter your engineer's office number, if applicable.",
                
            },
        ])
            .then((input) => {
                const engineer = new Engineer(input.engineerName, input.engineerEmployeeId, input.engineerEmail, input.engineerOfficeNumber);
                teamMembers.push(engineer);
                askWhatNext();
            })
}

const askForIntern = () => {
    inquirer
        .prompt([
            {
                name: 'internName',
                type: 'input',
                message: "Please enter your intern's name",
                
            },
            {
                name: 'internEmployeeId',
                type: 'input',
                message: "Please enter your intern's employee ID number.",
                 
            },
            {
                name: 'internEmail',
                type: 'input',
                message: "Please enter your intern's email address.",
                
                
            },
            {
                name: 'internSchool',
                type: 'input',
                message: "Please enter your intern's school name.",
                
               
            },
        ])
            .then((input) => {
                const intern = new Intern(input.internName, input.internEmployeeId, input.internEmail, input.internSchool);
                teamMembers.push(intern);
                askWhatNext();
            })
}

const startApp = () => {
    promptManager();
}
startApp();

