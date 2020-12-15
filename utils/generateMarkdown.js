// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
    ${data.Description}

  ## Table of Contents
  * ${data.name}
  * ${data.name}
  * ${data.name}
  * ${data.name}
  * ${data.name}
  * ${data.name}     
  * ${data.name}
  * ${data.name}
  * ${data.name}
  * ${data.name}

  ## Installation Instructions 
  ${data.Installation}

  ## Usage Instructions
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributing Members
  ${data.Contributors}

  ## Testing 
   ${data.Test}

  ## Questions/Inquiries 

  # GitHub Profile
    ${data.Github}

  # Email
    ${data.Email}

`;
}
module.exports = generateMarkdown;
