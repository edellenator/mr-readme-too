// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const promptQuestions = () => {

    return inquirer.prompt([
        {
        type: 'input',
        name: 'pName',
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
    ]);
};

const promptLic = () => {
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the applicatio
    return inquirer.prompt([
        {
        type: 'list',
        name: 'license',
        message: 'Which licenses apply to this project (select all that apply)',
        choices: ['MIT', 'GNU', 'Mozilla Public License', 'Apache']
        }

    ]);
};
promptQuestions().then(promptLic).then(answers =>{
    console.log(answers)
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
