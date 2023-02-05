const engineerQuestions = [
{
    name: 'engineerName',
    type: 'input',
    message: "Please enter your engineer's name",
    when: (answers) => answers.whatNext === 'Add an engineer to your team',
    validate: engineerNameInput => {
        if(!engineerNameInput) {
            console.log("You must enter a name for your engineer!");
            return false;
        } if (engineerNameInput) {
            return true;
        }
    }
},
{
    name: 'engineerEmployeeId',
    type: 'input',
    message: "Please enter your engineer's employee ID number.",
    when: (answers) => answers.whatNext === 'Add an engineer to your team',
    validate: engineerEmployeeIdInput => {
        if(!engineerEmployeeIdInput){
            console.log("You must enter your engineer's employee ID number!");
            return false;
        } if (engineerEmployeeIdInput){
            return true;
        }
    } 
},
{
    name: 'engineerEmail',
    type: 'input',
    message: "Please enter your engineer's email address.",
    when: (answers) => answers.whatNext === 'Add an engineer to your team',
    validate: engineerEmailInput => {
        if(!engineerEmailInput){
            console.log("You must enter an email for your engineer!");
            return false;
        } if(engineerEmailInput){
            return true;
        }
    }
},
{
    name: 'engineerOfficeNumber',
    type: 'number',
    message: "Please enter your engineer's office number, if applicable.",
    when: (answers) => answers.whatNext === 'Add an engineer to your team',
    validate: engineerOfficeNumberInput => {
        if(!engineerOfficeNumberInput) {
            console.log("If this field does not apply, please enter 'N/A'")
        } if(engineerOfficeNumberInput){
            return true;
        }
    }
},

]