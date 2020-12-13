// this requires/calls inquirer
const inquirer = require('inquirer');
// this requires the generateMarkdonw in ifle
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log(generateMarkdown);
// this requires/calls file system
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
        message: 'What are the required installations for this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
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

// function to write README file
function writeToFile(readmeDemo.md, data) {
}

// function to initialize program
function init() {
    // initiates questions object prompt
    inquirer.prompt(questions)

}

// function call to initialize program
init();
