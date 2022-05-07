// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ``
  } else {
    return `![license badge](https://img.shields.io/static/v1?label=License&message=${license}&color=brightgreen&?style=for-the-badge)`
  }
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return ``
  } else {
    return `[Click here to view the full text of ${license} license](https://opensource.org/licenses/${license})`
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ``
  } else if (license === 'MIT') {
    return `
    This project protected under the ${license} license
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
    
  } else if (license === 'AGPL-3.0') {
    return `
    This project protected under the ${license} license
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    `
  } else if (license === 'MPL-2.0') {
    return`
    This project protected under the ${license} license
    MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL.
    `
  } else if (license === 'Apache-2.0') {
    return `
    This project protected under the ${license} license
    Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`
  }
}

// generate markdown for README
module.exports = generateMarkdown = (data) => {
  return `
# ${data.title}

## Description

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License


${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Questions

You can find me at my [github](https://github.com/${data.github})

Or you can email me at:

${data.email}

`;
}

