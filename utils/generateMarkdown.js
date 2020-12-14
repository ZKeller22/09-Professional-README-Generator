// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}/n

  ## ${data.description}/n

  ## ${data.contents}/n

  ## ${data.installation}/n

  ## ${data.usage}/n

  ## ${data.license}/n

  ## ${data.contributors}/n

  ## ${data.test}/n

  ## Questions/Inquiries /n

  # ${data.github}/n

  # ${data.email}/n

`;
}

module.exports = generateMarkdown;
