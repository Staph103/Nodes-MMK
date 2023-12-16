//function, commonly used for module imports in Node.js applications
const fs = require('fs')
const generateMarkdown = require('./utils/mdGenerator')
const inquirer = require('inquirer');
console.log(generateMarkdown);
inquirer
    .prompt([
        // Pass your questions in here 
        { type: 'input', name: 'title', message: 'What is the name of your project?' },
        { type: 'input', name: 'descrpt', message: 'Describe your project in a few words' },
        { type: 'input', name: 'instal', message: 'Proivide installation instructions' },
        { type: 'input', name: 'usage', message: 'Proivide usage instructions' },
        { type: 'input', name: 'contrib', message: 'If the project is open sourced provide contribution instructions' },
        { type: 'input', name: 'test', message: 'Provide instructions for testing the code' },
        { type: 'input', name: 'username', message: 'Provide your Github username' },
        { type: 'input', name: 'email', message: 'Provide your email address' },
        { type: 'list', name: 'license', message: 'Choose your applications license ', choices: ['MIT', 'Apache 2.0', 'BSD 3', 'GPL 3.0', 'NONE'] },



    ])
    //creates a file titled README.md and adds the data collected to that file 
    .then((answers) => {

        const theData = generateMarkdown(answers);
        console.log("answers" + theData)
        fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Successfully generated")
            }
        })

    })
    //
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });