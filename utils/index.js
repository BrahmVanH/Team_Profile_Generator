const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const teamManagerQuestions = require('./teamManagerPrompt');

const htmlContent = require('./htmlContent.js');

const Manager = require('../lib/teamManager');
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern');
const renderMainHtmlContent = require('./htmlContent.js');

const dist_dir = path.resolve(__dirname, 'dist');

const outputPath = path.join(dist_dir, 'teamProfile.html');

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
            createTeamProfileHtml();
            
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
                name: 'engineerGitHubUserName',
                type: 'input',
                message: "Please enter your engineer's GitHub username",
                
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

// ** USE ANIMALS.JSON IN 11-EXPRESS/08-STU... MODULE IN BOOTCAMP STUFF AS TEMPLATE FOR CREATING TEAM MEMBER CARDS.

const startApp = () => {
    promptManager();
}
startApp();


const createTeamProfileHtml= () => {
    if (!fs.existsSync(dist_dir)) {
        fs.mkdirSync(dist_dir);
    } else {
        fs.writeFileSync(outputPath, renderMainHtmlContent(teamMembers), 'utf-8');
        console.log("Check the 'dist' folder for your Team Profile!");
    }
}

module.export = teamMembers;

