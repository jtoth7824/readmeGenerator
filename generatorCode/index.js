// Packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// import/require markdown function in other js file
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Project Title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Description of project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions: ',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Select the types of contributions: ',
        choices: ['Bugs/Features', 'Review code'],
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Enter any tests: ',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Enter license info: ',
        choices: ['MIT', 'Apache', 'GNU GPL', 'BSD'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter GitHub username: ',
        name: 'githubuser',
    },
    {
        type: 'input',
        message: 'Enter email address: ',
        name: 'email',
    }
];

// Function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success'));
}

// Function to initialize app
function init() {

    const promptUser = () => inquirer.prompt(questions);
    //set filename & location to be parent directory
    const filename = '../sampleReadmeOutput.md';

    promptUser()
        // take the user responses and write the inputs to the readme file
        .then((response) => writeToFile(filename, response));
}

// Function call to initialize app
init();