const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const employees = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//structure of the code provided by the class instructor

    console.log(`Start building your software engineering team`),
    //manager questions
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Manager's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Pease enter the Manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the Manager's office number",
        },
    ])

    .then(response => {
    console.log(`Manager's entry complete. Please provide the informations for the rest of the team members`)
    // populate manager info
    const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
    );
    employees.push(manager);
    console.log(employees);

    // promptForNexEmployee ()
    promptForNextEmployee()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'Please choose the next employee role',
        name: 'addOrFinish',
        choices: [
            "Add an engineer",
            "Add an intern",
            "Finish building the team",
        ]}
    ])
        .then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}
