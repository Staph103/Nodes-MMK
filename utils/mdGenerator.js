// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  else {
    return ""
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenses = {
    // Define the licenses and their corresponding links
    mit: '[MIT License](https://opensource.org/licenses/MIT)',
    apache: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    gpl: '[GPL License](https://www.gnu.org/licenses/gpl-3.0.html)',

  };

  if (licenses[license]) {
    return licenses[license];
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `# ${data.title}${renderLicenseBadge(data.license)}\n \n
  ## Table of Contents\n\n
  * [Description](#description)\n\n * [Installation](#Installation)\n\n * [Usage-Information](#Usage)\n\n * [Contribution-Guidelines](#contribution)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n
  ## Description\n  ${ data.descrpt } \n
  ## Installation\n  ${ data.instal } \n
  ## Usage\n * ${ data.usage } \n
  ## Contribution\n  ${ data.contrib } \n
  ## Test Instructions\n  ${ data.test } \n
  ## Questions\n  Username: ${ data.username } \n
  https://github.com/${data.username}\n`;

}

module.exports = generateMarkdown;

