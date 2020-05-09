//importing all the necessary modules
const fs = require('fs');
const inquirer = require('inquirer');

//importing the files from different folders which contains file generations and creation of a promise
const generateMarkdown = require('./utils/generateMarkdown.js');
//const { writeToFile } = require('./utils/generate-promise.js');// genearte-promise 


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
            choices: ['MIT', 'ISC', 'Apache', 'postgresql']
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


const init = () => {
    return inquirer.prompt(questions)
    // .then(ans => {
    //     console.log(ans);
    //     generateMarkdown(ans);
    // })
    
}
init()
    .then(ans => {
         const read = generateMarkdown(ans);
            console.log(ans);
        fs.writeFile('readMe.md', read, err => {
                if(err) throw new Error(err);
                 console.log('ReadMe created!');
        });
    });

//TA solution to initialize
// function init() {
//     inquirer.prompt(questions).then((inquirerResponses) => {
//       writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
//     })
// }
// init();

