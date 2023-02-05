const teamManagerQuestions = [

    /*ADD NAME OF COMPANY QUESTIONS TO ADD EXTRA TO TOP OF WEBPAGE*/
    {
        name: 'companyName',
        type: 'input',
        message: "Please enter your company or Team's name",
        validate: companyNameInput => {
            if(!companyNameInput) {
                console.log("You must enter a name for your company or team!");
                return false;
            } if (companyNameInput) {
                return true;
            }
        }
    },
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


const whatNext = [
    {
        name: 'whatNext',
        type: 'list',
        message: "What would you like to do next?",
        choices: ["Add an engineer to your team", "Add an intern to your team", "Finish building team"],
        validate: whatNextInput => {
            if(whatNextInput) {
                return true;
            } if(!whatNextInput) {
                console.log("It is helpful to include a brief overview of the features that users can expect in the application. If you wish to leave out features, enter 'N/A'");
                return false;
            }
        },  
    },
]

module.exports = teamManagerQuestions;
module.exports = whatNext;





