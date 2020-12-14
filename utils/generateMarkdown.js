// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
    ${data.Description}

  ## Table of Contents
  *${name.Title}
  *${name.Description}
  *${name.Contents}
  *${name.installation}
  *${name.Usage}
  *${name.License}     
  *${name.Contributors}
  *${name.Test}
  *${name.GitHub}
  *${name.Email}

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
    ${github.com/github}

  # Email
    ${data.email}

`;
}
module.exports = generateMarkdown;
