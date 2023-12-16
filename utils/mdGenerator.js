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
  // Define the licenses and their corresponding links
  if (license !== "NONE") {
    return ` * [License](#license)`;
  }
  else {
    return ""
  }

};





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "NONE") {
    return `## License`;
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
    ${data.descrpt} 

  ## Table of Contents

  * [Installation](#installation) 
  * [Usage-Information](#usage)
  * [Contribution](#contribution)
  * [Test](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  

  ## Installation
    ${data.instal} 
    
  ## Usage

   ${data.usage} 
  
${renderLicenseSection(data.license)}

  ## Contribution

    ${data.contrib} 
  ## Tests
    ${data.test}

  ## Questions 

  Username: ${data.username} \n
  https://github.com/${data.username}\n`;

}

module.exports = generateMarkdown;

