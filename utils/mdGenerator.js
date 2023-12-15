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

  if (license !== "NONE") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  else {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `# ${data.title}\n
  ## Description\n * ${data.descrpt}\n
  ## Installation\n * ${data.instal}\n
  ## Usage\n * ${data.usage}\n
  ## Contribution\n * ${data.contrib}\n
  ## Test Instructions\n * ${data.test}\n
  ## License\n * ${data.license}\n
  ## Questions\n * Username: ${data.username}\n
  * https://github.com/${data.username}\n`;

}

module.exports = generateMarkdown;

