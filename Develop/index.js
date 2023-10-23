// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Enter a description for your project", 
    "Enter installation instructions for your project",
    "Enter usage information for your project",
    "Choose a license for your project",
    "Enter contribution guidelines for your project",
    "Enter test instructions for your project",
    "Enter your Github username",
    "Enter your email address"
];

const licenses = [
    'Apache 2.0',
    'Boost 1.0',
    'BSD 3-Clause',
    'BSD 2-Clause',
    'CC0',
    'Attribution 4.0 International',
    'Attribution-ShareAlike 4.0 International',
    'Attribution-NonCommercial 4.0 International',
    'Attribution-NoDerivates 4.0 International',
    'Attribution-NonCommmercial-ShareAlike 4.0 International',
    'Attribution-NonCommercial-NoDerivatives 4.0 International',
    'Eclipse Public License 1.0',
    'GNU GPL v3',
    'GNU GPL v2',
    'GNU AGPL v3',
    'GNU LGPL v3',
    'GNU FDL v1.3',
    'The Hippocratic License 2.1',
    'The Hippocratic License 3.0',
    'IBM Public License Version 1.0',
    'ISC License (ISC)',
    'The MIT License',
    'Mozilla Public License 2.0',
    'Attribution License (BY)',
    'Open Database License (ODbL)',
    'Public Domain Dedication and License (PDDL)',
    'The Perl License',
    'The Artistic License 2.0',
    'SIL Open Font License 1.1',
    'The Unlicense',
    'The Do What the Fuck You Want to Public License',
    'The zlib/libpng License',
    'None'
];
const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: questions[0],
        },

        {
        type: 'input',
        name: 'description',
        message: questions[1],
        },

        {
        type: 'input',
        name: 'installation',
        message: questions[2],
        },

        {
        type: 'input',
        name: 'usage',
        message: questions[3],
        },

        {
        type: 'list',
        name: 'license',
        message: questions[4],
        choices: licenses
        },

        {
        type: 'input',
        name: 'contribution',
        message: questions[5],
        },

        {
        type: 'input',
        name: 'tests',
        message: questions[6],
        },

        {
        type: 'input',
        name: 'github',
        message: questions[7],
        },
        {
        type: 'input',
        name: 'email',
        message: questions[8],
        },
    ])
    .then((data) => {
        const fileName = `README-${data.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName,data)
    }) 

    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    const markdownContent = generateMarkdown(data);
    fs.writeFile(fileName, markdownContent, (err) =>
    err ? console.log(err) : console.log('Success')
    );
};

// TODO: Create a function to initialize app
function init() {
    promptUser();
};

// Function call to initialize app
init();
