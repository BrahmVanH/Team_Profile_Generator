# Team_Profile_Generator


## REquirements
Prompts for user input
Asks for team members information
    GitHub username, name, email team-role
Creates an HTML file that displays each team-members information
Email addresses should be clickable and open default email service and populates addressee field 
GitHub username should be clickable and open GitHub profile

On application start:
    Prompted to enter team manager's name, employee ID, email address, and office number
        Once entered, user is prompted with menu with option to add an engineer or intern or to finish building team
            When engineer option selected-
                enter engineers name, id, email, and github username, taken back to menu
            When intern selected
                enter intern name, ID, email, and school, take back to menu
    When 'build team' is selected, exit application and HTML is generated  

Functions:

Init() - needs to initiate the initial prompt, calls functions to initiate inquirer prompts and awaits the process of handling the answers

Collection of answers: 
    Feed answers.teamManager... into a subclass (manager) of class (Employee)
    Feed answers.engineer into a subclass (engineer) of class (Employee)
    Feed answers.intern into a subclass (intern) of class (employee)

Handling of answers:
    Writetofile();
    formatAnswerContentToHtml();
    createTemplateHtml();
    renderHtml(); this will use the returns of the above two functions to create the final product

companyInfoPrompt
    function to call inquirer with questionsusern

teamManagerPrompt
    function to call inquirer with questions

employeeClass
    team manager subclass
    engineer subclass
    intern subclass
    

engineerPrompt
    function to call inquirer with questions

internPrompt
    function to call inquirer with questions

index
    series of calls to organize flow of application
    call init()


FLOW:
    Initiate 
    Prompts for manager's information
    Process manager's information 
    whatNext
    prompt for engineers information
    process
    whatnext
    process interns information
    whatnext
    Build HTML


