// function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  return `
  # ${data.title}
  ![Github license](${data.license})

  ## Description
    ${data.description}
  
  ## Table of Contents
    * [Installation](#installation)
    
    * [Usage](#usage)

    * [License](#license)

    * [Contributors](#contributors)

    * [Tests](#tests)

    * [Questions] (#questions)

  ## Installation <a name="installation"></a>

  To Install necessary dependencies, run the following command:

      ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License

  This project is licensed under then ${data.license} license

  ## Contributors

  The contributors of the Application: ${data.contributors}

  ## Tests

      ${data.test}
  
  ## Questions

  If you have any questions about the application, please reach out to me @ 

  ${data.email}
   
`;
}

module.exports = generateMarkdown;
