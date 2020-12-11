const inquirer = require('inquirer');
const fs = require('fs')

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What are bullets in the table of contents?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Select the type of licese.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide the application contributing members.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'provide testing instructions.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide your GitHub username and email address.'
    },
];

inquirer
    .prompt(questions)

console.log(questions)





// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
