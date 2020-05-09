// function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  return `
  # ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
      ${data.installation}

  ## Usage
  ${data.usage}
   
  ## License
  This project is licensed under the ${data.license}.

  ## Contributing
  ${data.contribution}

  ## Tests
      ${data.test}

  ## Questions
  If you have any questions about the application, contact me directly at ${data.email}. My Github is https://github.com/${data.github}.
`;

}

module.exports = generateMarkdown;
