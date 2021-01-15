var badge='';

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === 'MIT') {
    badge = 'https://img.shields.io/badge/license-MIT-green';
    return badge;
  } else if (license === 'Apache') {
    badge = 'https://img.shields.io/badge/license-Apache-blue';
    return badge;
  } else if (license === 'GNU') {
    badge = 'https://img.shields.io/badge/license-BSD-green';
    return badge;
  } else if (license === 'BSD') {
    badge = 'https://img.shields.io/badge/license-BSD-green';
    return badge;
  } else if (license === 'GPL') { 
    badge = 'https://img.shields.io/badge/license-GPL-blue';
    return badge;
  } else {
    badge = "";
    return badge;
  }
}

var licLink='';
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license === 'MIT') {
    console.log("in link MIT");
    licLink = 'https://www.mit.edu/~amini/LICENSE.md';
    return licLink;
  } else if (license === 'Apache') {
    licLink = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
    return licLink;
  } else if(license === 'GNU') {
    licLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    return licLink;
  } else if(license === 'BSD') {
    licLink = 'https://opensource.org/licenses/BSD-3-Clause';
    return licLink;
  } else if(license === 'GPL') {
    licLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    return licLink;
  } else {
    licLink = '';
    return licLink;
  }
}

var licSection = '';
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(title, license) {

  // call to retrieve license link
  renderLicenseLink(license);
  // if no license link return empty string
  if(licLink==='') {
    licSection = ``;
  } else {
    // license link exists, then build license section
    licSection = `Copyright &copy; John Toth 2021

The ${title} application is covered under the [${license}](${licLink}) license.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  // call to retrieve appropriate badge for license selected
  renderLicenseBadge(data.license);
  // call to build License section in readme
  renderLicenseSection(data.title, data.license);

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
If there are any questions about this **${data.title}** application, then please feel free to contact me
<div>at either my GitHub profile</div>

https://github.com/${data.githubuser}

or you can contact me at my the following email address:  **${data.email}**
`;
}

// export function
module.exports = generateMarkdown;
