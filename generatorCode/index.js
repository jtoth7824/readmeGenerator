// Packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');
const fs = require('fs');

//const util = require('util');
// import/require markdown function in other js file
const generateMarkdown = require('./generateMarkdown.js');

//const writeFileAsync = util.promisify(fs.writeFile);

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
    const filename = 'sampleReadmeOutput.md';

    promptUser()
//      .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
        .then((response) => writeToFile(filename, response));
//    .then((response) => fs.writeFile('sampleReadmeOutput.md', generateMarkdown(response), (err) =>
//   err ? console.error(err) : console.log('Success!') ));
//      .catch((err) => console.error(err));
}

// Function call to initialize app
init();