// Commands to use modules
const fs = require("fs");
const inquirer = require("inquirer");
// const axios = require("axios");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        // default: 'title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
        default: 'description'
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Which section(s) do you want displayed in the Table of Contents?',
        choices: [
            {
                name: 'Installation \n'
                // checked: true
            },
            {
                name: 'Usage \n'
            },
            {
                name: 'License \n'
            },
            {
                name: 'Contributing \n'
            },
            {
                name: 'Tests \n'
            },
            {
                name: 'Questions \n'
            }
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        default: 'usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any contribution guidelines for your project.',
        default: 'contribution'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any testing instructions for your project.',
        default: 'tests'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select an open source license(S) for your project.',
        choices: [
            {
                name: 'MIT License',
                checked: true
            },
            {
                name: 'GNU General Public License (GPL) 3.0'
            },
            {
                name: 'Apache License 2.0'
            }
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: 'username'
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address?',
        default: 'email'
    }
];


function init() {
    inquirer
        .prompt(questions)
            .then((answer) => {

            // Creates and appends user project title response to readme file
            fs.appendFileSync("READMEProj.md", ("# " + answer.title + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Creates and appends project description to readme file
            fs.appendFileSync("READMEProj.md", ("## Description" + '\n' + answer.description + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Creates and appends table of contents to readme file
            fs.appendFileSync("READMEProj.md", ("## Table of Contents" + '\n' + answer.contents + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })

            // Appends installation instructions to readme file
            fs.appendFileSync("READMEProj.md", ("## Installation" + '\n' + answer.installation + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })
            
            // Appends usage instructions to readme file
            fs.appendFileSync("READMEProj.md", ("## Usage Instructions" + '\n' + answer.usage + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })

            // Appends contribution guidelines to readme file
            fs.appendFileSync("READMEProj.md", ("## How to Contribute to the Application " + '\n' + answer.contribution + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })

            // Appends testing instructions to readme file
            fs.appendFileSync("READMEProj.md", ("## Testing Examples for the Application " + '\n' + answer.tests + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })

            // Appends license selection to readme file
            fs.appendFileSync("READMEProj.md", ("## License" + '\n' + answer.license + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            })

            // Appends GitHub username and email to readme file
            fs.appendFileSync("READMEProj.md", ("## Questions" + '\n' + "Project developer's GitHub: " + answer.username + '\n' + "Contact the developer at: " + answer.email + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }

            });
            
            // // Appends GitHub email to readme file
            // fs.appendFileSync("READMEProj.md", ("# " + answer.email ) + '\n', function(err) {

            //     if (err) {
            //         console.log(err)
            //     }
            //     else {
            //         console.log("Success")
            //     }

            // })
            

        }
    );
};


// Calls function to create readme file
init();


// Print responses to console
// console.log(answer);

/**
 * 
 * project title
 * --"What is the title of your project"
 * 
 * description
 * --"How would you describe your project"
 * 
 * table of contents
 * -- links to each section
 * 
 * installation
 * --"What are the steps required to install your project?"
 *  
 * usage
 * --"Provide instructions and examples for use."
 * 
 * license
 * --"What are the licensing restrictions for your project?"
 * 
 * contributing
 * --"List any collaborators that helped you build your project."
 * 
 * tests
 * ---"Provide examples on how to run any tests for your "
 * 
 * questions
 * --gh username
 * --"Please contact me at (gh email) for more questions." 
 * 
 * 
 */