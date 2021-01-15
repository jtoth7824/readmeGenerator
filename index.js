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
        type: 'input',
        message: 'Enter contributor names: ',
        name: 'contributor',
    },
    {
        type: 'input',
        message: 'Enter any tests: ',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Enter license info: ',
        choices: ['MIT', 'Apache', 'GNU', 'BSD', 'GPL'],
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
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {

    const promptUser = () => inquirer.prompt(questions);

    promptUser()
//      .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
//    .then((response) => fs.writeFile('README.md', generateMarkdown(response)))
    .then((response) => fs.writeFile('README.md', generateMarkdown(response), (err) =>
   err ? console.error(err) : console.log('Success!') ));
//      .catch((err) => console.error(err));
}

// Function call to initialize app
init();