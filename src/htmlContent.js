const renderTeam = (team) => {

    
    const renderTeamManagerCard = (manager) => `
    
        <div class="card" id="teamMemberCard">
            <div id="cardHeader">
                <h2>${manager.employeeName}</h2>
                    <h4>${manager.title}</h4>
            </div>   
            <div>
                <p>ID: ${manager.employeeId}</p>
                <a href="mailto:${manager.employeeEmail}">${manager.employeeEmail}</a>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    
    
        `;

    const renderInternCard = (intern) => `

            <div class="card" id="teamMemberCard">
                <div id="cardHeader">
                    <h2>${intern.employeeName}</h2>
                    <h4>${intern.title}</h4>
                </div>
                <div>
                    <p>ID: ${intern.employeeId}</p>
                    <a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a>
                    <p>School Name: ${intern.schoolName}</p>
                </div>
            </div>
            
            `;

    const renderEngineerCard = (engineer) => `

        <div class="card" id="teamMemberCard">
           <div id="cardHeader"> 
                <h2>${engineer.employeeName}</h2>
                    <h4>${engineer.title}</h4>
            </div>
            <div>
                <p>ID: ${engineer.employeeId}</p>
                <a href="mailto:${engineer.employeeEmail}">${engineer.employeeEmail}</a>
                <p>GitHub UserName: <a href="https://github.com/${engineer.gitHubUserName}">${engineer.gitHubUserName}</a></p>
            </div>
        </div> 

         `;

        
        const htmlContent = [];
        
        htmlContent.push(
            team.filter((employee) => employee.getTitle() === "Manager")
            .map((manager) => renderTeamManagerCard(manager)).join(''))
            
        htmlContent.push(
            team.filter((employee) => employee.getTitle() === "Engineer")
            .map((engineer) => renderEngineerCard(engineer)).join(''))
                
                
        htmlContent.push(
            team.filter((employee) => employee.getTitle() === 'Intern')
            .map((intern) => renderInternCard(intern)).join(''))
        
        
        return htmlContent.join('');
        
        };

const renderMainHtmlContent = (team) => `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Quicksand&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        
        <header class=>
            <h1>My Team</h1>
         </header>
        

            <div class="container" id="dashboard">
                ${renderTeam(team)}       
            </div>
      
    </body>
    </html>



`;

module.exports = renderMainHtmlContent;