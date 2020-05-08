// function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  return `
  # Title
  ${data.title}
  

`;
}

module.exports = generateMarkdown;
