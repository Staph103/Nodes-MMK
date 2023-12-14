
const fs = require('fs')
const generateMarkdown = require('./utils/mdGenerator')
const inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {type: 'input', name: 'title', message: 'What is the name of your project?'},
    {type: 'input', name: 'descrpt', message: 'Describe your porject in a few words'},
    {type: 'input', name: 'instal', message: 'Proivide installation instructions'},
    {type: 'input', name: 'usage', message: 'Proivide usage instructions'},
    {type: 'input', name: 'contrib', message: 'If the project is open sourced provide contribution instructions'},
    {type: 'input', name: 'test', message: 'Provide instructions for testing the code'},
    {type: 'input', name: 'username', message: 'Provide your Github username'},
    {type: 'input', name: 'email', message: 'Provide your email address'},
    {type: 'list', name: 'license', message: 'Choose your applications license ', choices:['MIT', 'Apache 2.0', 'BSD 3','GPL 3.0', 'NONE']},



  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.title)
    console.log(answers.descrpt)
    console.log(answers.instal)
    console.log(answers.usage)
    console.log(answers.contrib)
    console.log(answers.test)
    console.log(answers.license)
    fs.writeFile('README.md',generateMarkdown(answers),(err) =>{
        if (err) {
            console.log(err)
        }
        else{
            console.log("Successfully generated")
        }
    })

  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });