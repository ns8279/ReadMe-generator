//importing all the necessary modules
const fs = require('fs');
const inquirer = require('inquirer');

//importing the files from different folders which contains file generations and creation of a promise
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeToFile } = require('./utils/generate-promise.js');// genearte-promise 


// array of questions for user
const questions = [

        {
             type: 'input',
             name: 'github',
             message: 'Enter your Github username(Required)',
             validate: githubUsername => {
                 if(githubUsername) {
                     return true;
                 }else {
                     console.log('Please enter your Github USername!');
                     return false;
                 }
             }
        },

        {
            type: "input",
            name: "email",
            message: "Enter your email: (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },
          
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title for your Project(Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                }else {
                    console.log('Please enter a valid title!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description(Required)',
            validate: descInput => {
                if(descInput) {
                    return true;
                }else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Whhich license do you wish to use?',
            choices: ['MIT http://img.shields.io/badge/license-MIT-blue.svg', 'ISC', 'Apache', 'postgresql']
        },

        {
            type: 'input',
            name: 'installation',
            message: 'How to install all the dependencies?',
            deafault: 'npm i'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this app?',
        },

        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the Contributors for the Application?',
        },  
 
    ]

// // // function to initialize program
// const init = (AnsData) => {
//     // If there's is none, create one
// 	if (!AnsData) {
// 		AnsData = [];
// 	}
//     return inquirer.prompt(questions)
//     .then(answers => {
//         console.log(answers);
//         AnsData.push(answers);
//         //console.log(AnsData);
//         })
// }

// // // function call to initialize program
// init()
// .then(AnsData => {
// return generateMarkdown(AnsData);
// })
// .then((fileName, data) => {
//     return writeToFile(fileName, data);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse)
// })
// .catch(err => {
//     console.log(err);
//   });

//===================================================================

// const init = () => {
//     return inquirer.prompt(questions)
//     .then(ans => {
//         console.log(ans);
//     })
// }
// init()
//     .then(ans => {
//          const pageHTML = generateMarkdown(ans);

//         fs.writeFile('readMe.md', pageHTML, err => {
//                 if(err) throw new Error(err);
//                  console.log('Page Created! Checkout index.html to see the output!');
//         });
//     });

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
  }
  init();

