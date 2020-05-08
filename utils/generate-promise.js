// creating a function to write file which returns a new promise

const fs = require ('fs') //including the file system module

// const writeToFile = fileContent => {
//     //create a new promise
//     return new Promise((resolve, reject) => {
//             fs.writeFile('readMe.md', fileContent, err => {
//                 //if there is an error, reject the promise and return to the .catch function
//             if(err) {
//                 reject(err);
//                 return; //returning out of this function
//             }
//             //if everything went well then resolve the promise and display the output
//             resolve({
//                 ok: true,
//                 message: 'Successfully created ReadMe.md'
//             });
//         });
//     });
// }

const path = require("path");
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
module.exports = {writeToFile};
