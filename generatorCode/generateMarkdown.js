// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'MIT':
       return 'https://img.shields.io/badge/license-MIT-green';
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue';
    case 'GNU':
      return 'https://img.shields.io/badge/license-BSD-green';
    case 'BSD':
      return 'https://img.shields.io/badge/license-BSD-green';
    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-blue';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license) {
    case 'MIT':
       return 'https://www.mit.edu/~amini/LICENSE.md';
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(title, license) {

  // call to retrieve license link
  let licLink = renderLicenseLink(license);
  // if no license link return empty string
  if(licLink==='') {
    return '';
  } else {
    // license link exists, then build license section
    return `Copyright &copy; John Toth 2021

The **${title}** application is covered under the [${license}](${licLink}) license.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  // call to retrieve appropriate badge for license selected
  let badge = renderLicenseBadge(data.license);
  // call to build License section in readme
  let licSection = renderLicenseSection(data.title, data.license);

  // return the markdown of the readme
  return `![License Badge](${badge})

# ${data.title}

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
${licSection}

## Contributing
${data.contributor}

## Tests
${data.test}

## Questions
If there are any questions about this **${data.title}** application, then please feel
 free to contact me at either my GitHub profile
**https://github.com/${data.githubuser}**

or you can contact me at the following email address:  **${data.email}**
`;
}

// export function
module.exports = generateMarkdown;
