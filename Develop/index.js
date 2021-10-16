const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const generatePage = require('./utils/generatePage');

const promptQuestions = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: '????'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How should a user install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should a user use your project?'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What type of license should your project have?',
      options: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors to your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?'
    }
]);
}

promptQuestions();