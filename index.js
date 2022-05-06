// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require ('fs')



// TODO: Create an array of questions for user input
const promptQuestions = () => {

    return inquirer.prompt([
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please enter the name of the project.`);
                    return false;
                }
            }
        },


        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please enter a description of the project.`);
                    return false;
                }
            }
        },

        {
        type: 'input',
        name: 'installation',
        message: 'Please tell the user how to install the project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please walk us through installation of the project.`);
                    return false;
                }
            }
        },

        {
        type: 'input',
        name: 'contGuide',
        message: 'Please tell us how we can contribute to the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please let us know how we can contribute.`);
                    return false;
                }
            }
        },

        {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage and functionality. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please let us know the guidelines.`);
                    return false;
                }
            }
        },

        {
        type: 'input',
        name: 'testing',
        message: 'Please describe how the file application can be tested (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`Please let us know the guidelines.`);
                    return false;
                }
            }
        },

        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application
        {
            type: 'choices',
            name: 'license',
            message: 'Which licenses apply to this project (select all that apply)',
            choices: ['MIT', 'AGPL-3.0', 'MPL-2.0', 'Apache-2.0']
        },

        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
        type: 'input',
        name: 'github',
        message: 'Please enter your github user name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`We need to know your user name!.`);
                    return false;
                }
            }
        },

        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your email (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log(`provide an email, even if it's fake.`);
                    return false;
                }
            }
        }
    ]);
};


        






// TODO: Create a function to write README file
function writeFile (fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
    });
};
// TODO: Create a function to initialize app
function init() {
    promptQuestions().then(answers => {
        return generateMarkdown(answers);
    }).then(markdown =>{
        return writeFile('README.md', markdown)
    }).then (copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
