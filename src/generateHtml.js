const generateHtml = (teamInformationAnswers) => {
    return `
    
    Company Name: ${teamInformationAnswers.companyName}

    Manager name: ${teamInformationAnswers.teamManagerName}

    Engineer name: ${teamInformationAnswers.engineerName}

    Intern name: ${teamInformationAnswers.internName}


    `
}

module.exports = generateHtml;