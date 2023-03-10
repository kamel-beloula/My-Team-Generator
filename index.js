const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//structure of the code provided by the class instructor

console.log(`Hello! Welcome to the team generator`),
  //manager questions
  inquirer
    .prompt([
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

    .then((response) => {
      console.log(
        `Manager's entry complete. Please provide the informations for the rest of the team members`
      );
      // populate manager info
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
      );
      employees.push(manager);

      // promptForNexEmployee ()
      promptForNextEmployee();
    });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose the next employee role",
        name: "addMemberOrFinish",
        choices: ["Engineer", "Intern", "Finish building the team"],
      },
    ])
    .then((response) => {
      // if engineer
      if (response.addMemberOrFinish === "Engineer") {
        // promptForEngineer
        promptForEngineer();
        // else if intern
      } else if (response.addMemberOrFinish === "Intern") {
        // promptForIntern
        promptForIntern();
        // else
      } else {
        //use the functionality from page-template to generate the team
        buildPage();
        
      }
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      //engineer questions
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Pease enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Please the engineer's github user name:",
      },
    ])
    .then((response) => {
      // populate engineer info
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github,
      );
      // add new engineer to employees array
      employees.push(engineer);

      // promptForNexEmployee ()
      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name:",
          },
          {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Pease enter the intern's email address:",
          },
          {
            type: "input",
            name: "school",
            message: "Please the intern's school name:",
          },
        ])
    .then((response) => {
        // populate engineer info
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school,
      );
      // add new intern to employees array
      employees.push(intern);

      // promptForNexEmployee ()
      promptForNextEmployee();
    });
};

const buildPage = () => {
    fs.writeFile(outputPath, render(employees), err => 
            err ? 
            console.error(err) : 
            console.log('Congratulations! Your team file is ready to view in the output folder'))
    }
