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
  ${data.contributors}

  ## Tests
      The video on how to test this application is included here:[Walk-through Video](https://drive.google.com/file/d/1_3j0q2h74klz98xjd9AOwFKLybaMwIps/view)
  
  ## Questions
  If you have any questions about the application, contact me directly at ${data.email}. My Github is https://github.com/${data.github}.
`;

}

module.exports = generateMarkdown;
