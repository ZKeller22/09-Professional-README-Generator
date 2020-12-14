// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
    ${data.Description}

  ## Table of Contents
  *${data.Title}
  *${data.Description}
  *${data.Contents}
  *${data.installation}
  *${data.Usage}
  *${data.License}     
  *${data.Contributors}
  *${data.Test}
  *${data.GitHub}
  *${data.Email}

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
    ${data.github}

  # Email
    ${data.email}

`;
}

module.exports = generateMarkdown;
