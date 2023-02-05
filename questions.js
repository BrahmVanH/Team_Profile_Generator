const teamManagerQuestions = [

    /*ADD NAME OF COMPANY QUESTIONS TO ADD EXTRA TO TOP OF WEBPAGE*/
    {
        name: 'teamManagerName',
        type: 'input',
        message: "Please enter your Team Manager's name",
        validate: teamManagerNameInput => {
            if(!teamManagerNameInput) {
                console.log("You must enter a name for your team manager!");
                return false;
            } if (teamManagerNameInput) {
                return true;
            }
        }
    },
    {
        name: 'teamManagerEmployeeId',
        type: 'input',
        message: "Please enter your Team Manager's employee ID number.",
        validate: teamManagerEmployeeIdInput => {
            if(!teamManagerEmployeeIdInput){
                console.log("You must enter your Team Manager's employee ID number!");
                return false;
            } if (teamManagerEmployeeIdInput){
                return true;
            }
        } 
    },
    {
        name: 'teamManagerEmail',
        type: 'input',
        message: "Please enter your Team Manager's email address.",
        validate: teamManagerEmailInput => {
            if(!teamManagerEmailInput){
                console.log("You must enter an email for your Team Manager!");
                return false;
            } if(teamManagerEmailInput){
                return true;
            }
        }
    },
    {
        name: 'teamManagerOfficeNumber',
        type: 'number',
        message: "Please enter your Team Manager's office number, if applicable.",
        validate: teamManagerOfficeNumberInput => {
            if(!teamManagerOfficeNumberInput) {
                console.log("If this field does not apply, please enter 'N/A'")
            } if(teamManagerOfficeNumberInput){
                return true;
            }
        }

    },
    
]

const inquireWhatNext = () => {
    inquirer.prompt(whatNext)
    .then()
}


const inquireTeamManager = () => {
    inquirer.prompt(teamManagerQuestions)
    .then()
} 

const inquireEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then()
}

const inquireIntern = () => {
    inquirer.prompt(internQuestions);
}



    const whatNext = [
    {
        name: 'whatNext',
        type: 'list',
        message: "What would you like to do next?",
        choices: ["Add an engineer to your team", "Add an intern to your team", "Finish building team"],
        
    },
]
