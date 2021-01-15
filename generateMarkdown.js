// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badge='';

function renderLicenseBadge(license) {
  console.log("license is: " + license);
  if(license === 'MIT') {console.log("in MIT");
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("license link: " + license);
  if(license === 'MIT') {
    console.log("in link MIT");
    licLink = 'https://www.mit.edu/~amini/LICENSE.md';
    return licLink;
  } else if (license === 'Apache') {
    licLink = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
    return licLink;
  } else if(license === 'GNU') {
    licLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    return licLInk;
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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(title, license) {

  renderLicenseLink(license);
  if(licLink==='') {
    licSection = ``;
  } else {
    licSection = `Copyright &copy; John Toth 2021

The ${title} application is covered under the [${license}](${licLink}) license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseSection(data.title, data.license);

console.log(data);
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
<div>If there are any questions about this **${data.title}** application, then please feel free to contact me</div>
<div>at either my GitHub profile</div>

https://${data.githubuser}

<div>or you can contact me at my the following email address:  ${data.email}</div>
`;
}

module.exports = generateMarkdown;
