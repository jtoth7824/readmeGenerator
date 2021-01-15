// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');
const fs = require('fs');

const util = require('util');
const generateMarkdown = require('./generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    const promptUser = () => inquirer.prompt(questions);

    promptUser()
//    .then((data) => console.log(data))
      .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
//     .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
}

// Function call to initialize app
init();