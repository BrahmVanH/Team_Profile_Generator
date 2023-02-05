const internQuestions = [
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