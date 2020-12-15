// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage Instructions](#UsageInstructions)
  * [License](#License)
  * [Contributing Members](#ContributingMembers)
  * [Testing](#Testing)    
  * [Questions/Inquiries](#Questions/Inquiries)

  ## Description
  ${data.Description}


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

  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.Github})

  ### Email
  (${data.Email})

`;
}
module.exports = generateMarkdown;
