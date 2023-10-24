// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = [
  `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
  `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`,
  `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`,
  `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`,
  `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`,
  `![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)`,
  `![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)`,
  `![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)`,
  `![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)`,
  `![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)`,
  `![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)`,
  `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`,
  `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
  `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`,
  `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`,
  `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`,
  `![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)`,
  `[License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)`,
  `![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)`,
  `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`,
  `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`,
  `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
  `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`,
  `![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`,
  `![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`,
  `![License: PDDL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`,
  `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`,
  `![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)`,
  `![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)`,
  `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`,
  `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`,
  `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`
]
const licenseLinks = [
  `https://opensource.org/licenses/Apache-2.0`,
  `https://www.boost.org/LICENSE_1_0.txt`,
  `https://opensource.org/licenses/BSD-3-Clause`,
  `https://opensource.org/licenses/BSD-2-Clause`,
  `http://creativecommons.org/publicdomain/zero/1.0/`,
  `https://creativecommons.org/licenses/by/4.0/`,
  `https://creativecommons.org/licenses/by-sa/4.0/`,
  `https://creativecommons.org/licenses/by-nc/4.0/`,
  `https://creativecommons.org/licenses/by-nd/4.0/`,
  `https://creativecommons.org/licenses/by-nc-sa/4.0/`,
  `https://creativecommons.org/licenses/by-nc-nd/4.0/`,
  `https://opensource.org/licenses/EPL-1.0`,
  `https://www.gnu.org/licenses/gpl-3.0`,
  `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`,
  `https://www.gnu.org/licenses/agpl-3.0`,
  `https://www.gnu.org/licenses/lgpl-3.0`,
  `https://www.gnu.org/licenses/fdl-1.3`,
  `https://firstdonoharm.dev`,
  `https://firstdonoharm.dev`,
  `https://opensource.org/licenses/IPL-1.0`,
  `https://opensource.org/licenses/ISC`,
  `https://opensource.org/licenses/MIT`,
  `https://opensource.org/licenses/MPL-2.0`,
  `https://opendatacommons.org/licenses/by/`,
  `https://opendatacommons.org/licenses/odbl/`,
  `https://opendatacommons.org/licenses/pddl/`,
  `https://opensource.org/licenses/Artistic-2.0`,
  `https://opensource.org/licenses/Artistic-2.0`,
  `https://opensource.org/licenses/OFL-1.1`,
  `http://unlicense.org/`,
  `http://www.wtfpl.net/about/`,
  `https://opensource.org/licenses/Zlib`
]

function renderLicenseBadge(license) {
  if (license ==='None'){
    return ''
  }else if (license === 'Apache 2.0'){
    return licenseBadges[0]
  }else if (license === 'Boost 1.0'){
    return licenseBadges[1]
  }else if(license === 'BSD 3-Clause'){
    return licenseBadges[2]
  }else if (license === 'BSD 2-Clause'){
    return licenseBadges[3]
  }else if (license ===  'CC0'){
    return licenseBadges[4]
  }else if (license === 'Attribution 4.0 International'){
    return licenseBadges[5]
  }else if (license === 'Attribution-ShareAlike 4.0 International'){
    return licenseBadges[6]
  }else if (license === 'Attribution-NonCommercial 4.0 International'){
    return licenseBadges[7]
  }else if (license === 'Attribution-NoDerivates 4.0 International'){
    return licenseBadges[8]
  }else if (license ==='Attribution-NonCommmercial-ShareAlike 4.0 International'){
    return licenseBadges[9]
  }else if (license === 'Attribution-NonCommercial-NoDerivatives 4.0 International'){
    return licenseBadges[10]
  }else if (license === 'Eclipse Public License 1.0'){
    return licenseBadges[11]
  }else if (license === 'GNU GPL v3'){
    return licenseBadges[12]
  }else if (license === 'GNU GPL v2'){
    return licenseBadges[13]
  }else if (license === 'GNU AGPL v3'){
    return licenseBadges[14]
  }else if (license==='GNU LGPL v3'){
    return licenseBadges[15]
  }else if (license==='GNU FDL v1.3'){
    return licenseBadges[16]
  }else if (license === 'The Hippocratic License 2.1'){
    return  licenseBadges[17]
  }else if (license=== 'The Hippocratic License 3.0'){
    return licenseBadges[18]
  }else if (license==='IBM Public License Version 1.0'){
    return licenseBadges[19]
  }else if (license==='ISC License (ISC)'){
    return licenseBadges[20]
  }else if (license==='The MIT License'){
    return licenseBadges[21]
  }else if (license==='Mozilla Public License 2.0'){
    return licenseBadges[22]
  }else if (license==='Attribution License (BY)'){
    return licenseBadges[23]
  }else if (license==='Open Database License (ODbL)'){
    return licenseBadges[24]
  }else if (license==='Public Domain Dedication and License (PDDL)'){
    return licenseBadges[25]
  }else if (license==='The Perl License'){
    return licenseBadges[26]
  }else if (license==='The Artistic License 2.0'){
    return licenseBadges[27]
  }else if (license==='SIL Open Font License 1.1'){
    return licenseBadges[28]
  }else if (license === 'The Unlicense'){
    return licenseBadges[29]
  }else if (license==='The Do What the Fuck You Want to Public License'){
    return licenseBadges[30]
  }else if (license==='The zlib/libpng License'){
    return licenseBadges[31]
  }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==='None'){
    return ''
  }else if (license === 'Apache 2.0'){
    return licenseLinks[0]
  }else if (license === 'Boost 1.0'){
    return licenseLinks[1]
  }else if(license === 'BSD 3-Clause'){
    return licenseLinks[2]
  }else if (license === 'BSD 2-Clause'){
    return licenseLinks[3]
  }else if (license ===  'CC0'){
    return licenseLinks[4]
  }else if (license === 'Attribution 4.0 International'){
    return licenseLinks[5]
  }else if (license === 'Attribution-ShareAlike 4.0 International'){
    return licenseLinks[6]
  }else if (license === 'Attribution-NonCommercial 4.0 International'){
    return licenseLinks[7]
  }else if (license === 'Attribution-NoDerivates 4.0 International'){
    return licenseLinks[8]
  }else if (license ==='Attribution-NonCommmercial-ShareAlike 4.0 International'){
    return licenseLinks[9]
  }else if (license === 'Attribution-NonCommercial-NoDerivatives 4.0 International'){
    return licenseLinks[10]
  }else if (license === 'Eclipse Public License 1.0'){
    return licenseLinks[11]
  }else if (license === 'GNU GPL v3'){
    return licenseLinks[12]
  }else if (license === 'GNU GPL v2'){
    return licenseLinks[13]
  }else if (license === 'GNU AGPL v3'){
    return licenseLinks[14]
  }else if (license==='GNU LGPL v3'){
    return licenseLinks[15]
  }else if (license==='GNU FDL v1.3'){
    return licenseLinks[16]
  }else if (license === 'The Hippocratic License 2.1'){
    return  licenseLinks[17]
  }else if (license=== 'The Hippocratic License 3.0'){
    return licenseLinks[18]
  }else if (license==='IBM Public License Version 1.0'){
    return licenseLinks[19]
  }else if (license==='ISC License (ISC)'){
    return licenseLinks[20]
  }else if (license==='The MIT License'){
    return licenseLinks[21]
  }else if (license==='Mozilla Public License 2.0'){
    return licenseLinks[22]
  }else if (license==='Attribution License (BY)'){
    return licenseLinks[23]
  }else if (license==='Open Database License (ODbL)'){
    return licenseLinks[24]
  }else if (license==='Public Domain Dedication and License (PDDL)'){
    return licenseLinks[25]
  }else if (license==='The Perl License'){
    return licenseLinks[26]
  }else if (license==='The Artistic License 2.0'){
    return licenseLinks[27]
  }else if (license==='SIL Open Font License 1.1'){
    return licenseLinks[28]
  }else if (license === 'The Unlicense'){
    return licenseLinks[29]
  }else if (license==='The Do What the Fuck You Want to Public License'){
    return licenseLinks[30]
  }else if (license==='The zlib/libpng License'){
    return licenseLinks[31]
  }

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None"){
    return ``
  }else{
  return `
  ## License
  
  ${renderLicenseBadge(license)}

  This project is licensed under the ${license} License.

  For more information go to ${renderLicenseLink(license)}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

For questions, contact me at 
${data.email} or www.github.com/${data.github}`;
}

module.exports = generateMarkdown;
