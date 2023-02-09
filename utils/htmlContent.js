const renderTeam = (team) => {
    
    const renderInternCard = (intern) => `

        <div class="card" id="sampleCard">
            <h2>${intern.employeeName}</h2>
            <h4>${intern.title}</h4>
            <p>ID: ${intern.employeeId}</p>
            <a href="${intern.employeeEmail}">${intern.employeeEmail}</a>
            <p>School Name: ${intern.schoolName}</p>
        </div>
        
        `;

    const renderEngineerCard = (engineer) => `

        <div class="card" id="sampleCard">
        <h2>${engineer.employeeName}</h2>
        <h4>${engineer.title}</h4>
        <p>ID: ${engineer.employeeId}</p>
        <a href="${engineer.employeeEmail}">${engineer.employeeEmail}</a>
        <p>GitHub UserName: <a href="github.com/${engineer.githubUsername}">${engineer.gitHubUserName}</a></p>
        </div> 

         `;

    const renderTeamManagerCard = (manager) => `

        <div class="card" id="sampleCard">
        <h2>${manager.employeeName}</h2>
        <h4>${manager.title}</h4>
        <p>ID: ${manager.employeeId}</p>
        <a href="${manager.employeeEmail}">${manager.employeeEmail}</a>
        <p>Office Number: ${manager.officeNumber}</p>
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
        <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>Team Profile</header>

        <div class="container" id="dashboard">
            <div id="teamIndex">
                
            </div>
            <div class="container" id="teamMemberCards">
                ${renderTeam(team)}       
            </div>
        </div>
    </body>
    </html>



`;

module.exports = renderMainHtmlContent;