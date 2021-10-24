// generates the readme page, using user input. 
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![License](https://img.shields.io/badge/license:-${data.license}-blue)](choosealicense.com/licenses/)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Please don't hesitate to contact me if you have any questions! <br>
  I can be reached at ${data.email}.<br>
  [You can find more of my work on my GitHub page.](http://github.com/${data.githubUsername})

  `
}


module.exports = generateMarkdown;