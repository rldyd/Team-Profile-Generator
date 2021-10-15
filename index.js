// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMember = [];

var questionsPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your manager's email address.");
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter your manager's office number");
          }
        },
      },
    ])
    .then((managerInfo) => {
      let manager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.officeNumber
      );
      teamMember.push(manager);
      console.log(teamMember);
    });
};
function nextQuestions() {
  return inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "Please choose one of the following option to add your team.",
        choices: ["Intern", "Engineer"],
      },

      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (data) => data.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the employee's GitHub username");
          }
        },
      },

      {
        type: "input",
        name: "name",
        message: "What is employee name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your employee's email address.");
          }
        },
      },

      {
        type: "input",
        name: "school",
        message: "What is intern's school name?",
        when: (answers) => answers.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school name.");
          }
        },
      },
      {
        type: "confirm",
        name: "addMore",
        message: "Do you want to add more your team members?",
        default: false,

        validate: (addmoreConfirm) => {
          if (addmoreConfirm === true) {
            return true;
          } else {
            console.log("Your team is all set.");
          }
        },
      },
    ])
    .then((employeeResponse) => {
      const { role, name, id, email, school, github, addMore } =
        employeeResponse;
      let newEmployee;
      if (role === "Engineer") {
        newEmployee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        newEmployee = new Intern(name, id, email, school);
      }

      teamMember.push(newEmployee);

      if (addMore) {
        return nextQuestions(teamMember);
      } else {
        return teamMember;
      }
    });
}

const printPage = function (page) {
  fs.writeFile("./dist/index.html", page, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Your team has been created.");
    }
  });
};

questionsPrompt()
  .then(nextQuestions)
  .then((teamMember) => {
    return generatePage(teamMember);
  })
  .then((page) => {
    printPage(page);
  })
  .catch((err) => {
    console.log(err);
  });
