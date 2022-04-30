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
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)'
        },
        {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
        },
        {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({confirmAbout}) => {
            if (confirmAbout) {
                return true;
            }
            else {
                return false;
            }
        }
        }
    ]);
};
promptQuestions().then(answers =>{
    console.log(answers)
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
