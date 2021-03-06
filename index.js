const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//function to obtain user input
const promptQuestions = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      validate: projectGithubUsernameInput => {
        if (projectGithubUsernameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: projectEmailInput => {
        if (projectEmailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: projectTitleInput => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log('Please enter the title or name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project. (Required)',
      validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How should a user install your project? (Required)',
      validate: projectInstallInput => {
        if (projectInstallInput) {
          return true;
        } else {
          console.log('Please enter a description of how users should install your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should a user use your project? Provide instructions and examples for use. (Required)',
      validate: projectUsageInput => {
        if (projectUsageInput) {
          return true;
        } else {
          console.log('Please enter a description of how users should use your project!');
          return false;
        }
      }
    },
    // not a required field. If no license is selected, the default is 'no license'
    {
      type: 'checkbox',
      name: 'license',
      message: 'What type of license should your project have?',
      choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense'],
      default: 'No licence'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors to your project? (Required)',
      validate: projectContributorsInput => {
        if (projectContributorsInput) {
          return true;
        } else {
          console.log('Please enter the contributors for your project!');
          return false;
        }
      }
    },
    // not a required field, if no input is given, default is 'N/A'
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
      default: 'N/A'
    }
]);
}

// takes the user input data to make the read me
promptQuestions()
  .then(data => {
    console.log(data);
    console.log(generateMarkdown(data));
    const readmeFile = generateMarkdown(data);
    fs.writeFile('README.md', readmeFile, err => {
      if (err) throw (err);
      console.log('README successfully generated!');
    });
  })

