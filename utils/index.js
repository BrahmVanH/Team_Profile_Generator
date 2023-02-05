//const Employee = require('./employee');
//const Manager = require('./teamManager');
//const Intern = require('./intern');
const inquirer = require('inquirer');
const teamManagerQuestions = require('./teamManagerPrompt');
const engineerQuestions = require('./engineerPrompt');
const internQuestions = require('./internPrompt');
const whatNext = require('./teamManagerPrompt');
const generateHtml = require('./generateHtml');

const promptManager = () => {
    return inquirer.prompt(teamManagerQuestions);
}

const promptEngineer = () => {
    return inquirer.prompt(engineerQuestions);

}

const promptIntern = () => {
    return inquirer.prompt(internQuestions);

}
const askForManager = () => {
    promptManager();
    askWhatNext();
   return promptManager();

}

const askForEngineer = () => {
    promptEngineer();
   // askWhatNext();
    return promptEngineer();
}

const askForIntern = () => {
    promptIntern();
    // askWhatNext();
    return promptIntern();
}


const askWhatNext = () => {
    inquirer.prompt(whatNext)
    .then((whatNextInput) => {
        if(whatNextInput === "Add an engineer to your team"){
            askForEngineer();
        } if (whatNextInput === "Add an intern to your team") {
            askForIntern();
        } if(whatNextInput === "Finish building team") {
            console.log("Finished");
            return;
        }
    })
}


function init() {
    const teamInformation = askForManager();
    const generateContent = generateHtml(teamInformation);
    console.log(generateContent);
  
}


init();

