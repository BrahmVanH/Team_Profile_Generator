const questions = [
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
    {
        name: 'whatNext',
        type: 'list',
        message: "What would you like to do next?",
        choices: ["Add an engineer to your team", "Add an intern to your team", "Finish building team"],
        
    },

    {
        name: 'internName',
        type: 'input',
        message: "Please enter your intern's name",
        when: (answers) => answers.whatNext === 'Add an intern to your team',
        validate: internNameInput => {
            if(!internNameInput) {
                console.log("You must enter a name for your intern!");
                return false;
            } if (internNameInput) {
                return true;
            }
        }
    },
    {
        name: 'internEmployeeId',
        type: 'input',
        message: "Please enter your intern's employee ID number.",
        when: (answers) => answers.whatNext === 'Add an intern to your team',
        validate: internEmployeeIdInput => {
            if(!internEmployeeIdInput){
                console.log("You must enter your intern's employee ID number!");
                return false;
            } if (internEmployeeIdInput){
                return true;
            }
        } 
    },
    {
        name: 'internEmail',
        type: 'input',
        message: "Please enter your intern's email address.",
        when: (answers) => answers.whatNext === 'Add an intern to your team',
        validate: internEmailInput => {
            if(!internEmailInput){
                console.log("You must enter an email for your intern!");
                return false;
            } if(internEmailInput){
                return true;
            }
        }
    },
    {
        name: 'internSchool',
        type: 'inpput',
        message: "Please enter your intern's school name.",
        when: (answers) => answers.whatNext === 'Add an intern to your team',
        validate: internOfficeNumberInput => {
            if(!internOfficeNumberInput) {
                console.log("If this field does not apply, please enter 'N/A'")
            } if(internOfficeNumberInput){
                return true;
            }
        }
    },
]


{
    type: 'confirm',
    message: 'Would you like to include a license?',
    name: 'confirmLicense',
    default: false,
},
{
    type: 'list',
    message: 'Choose a license',
    choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL v3', 'GPL v2', 'AGPL v3', 'LGPL v3', 'Unlicense', 'The Do What the Fuck You Want to Public License', 'MIT'],
    name: 'license',
    default: 'MIT',
    when: ( {confirmLicense} ) => {
        if(confirmLicense) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Please enter credit information.',
    name: 'credits',
    default: 'N/A',
    validate: creditsInput => {
        if(creditsInput) {
            return true;
        } if (!creditsInput) {
            console.log("It is expected to credit the work of others you may have used. If the work is yours only, enter 'N/A'")
        }
    }
},