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

const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMember = [];

//Function of Manager
const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter your Employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "what is your office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log("Please type your office number.");
                    return false;
                }
            }
        },
    ])
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            console.log(manager);
            teamMember.push(manager);
            console.log(teamMember);
        });
}

//Function of Engineer
const createEngineer = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your team engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your team engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter your Engineer's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter engineer's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "what is your github?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log("Please type your GitHub.");
                    return false;
                }
            }
        },
    ])
        .then((answer) => {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            console.log(engineer);
            teamMember.push(engineer);
            console.log(teamMember);
        })
        .then(createEmployee);
}

//Function of Intern
const createIntern = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your team intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your team Intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Intern's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter your Employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "what is your Intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log("Please type your Intern's school name.");
                    return false;
                }
            }
        },
    ])
        .then((answer) => {
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            console.log(intern);
            teamMember.push(intern);
            console.log(teamMember);
        })
        .then(createEmployee);
}

const createEmployee = function () {
    return inquirer.prompt
        ([
            {
                type: 'confirm',
                name: 'confirmAddRoles',
                message: "Would you like to add roles in your team?",
                dafault: false
            },
            {
                type: 'list',
                name: 'roleType',
                message: 'What role do you want to add in your team?',
                choices: ['Engineer', 'Intern'],
                when: ({ confirmAddRoles }) => {
                    if (confirmAddRoles) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        ])

        .then((answer) => {
            if (answer.roleType === 'Engineer') {
                console.log("Engineer profile has been created in your team");
                createEngineer();
            }
            else if (answer.roleType === 'Intern') {
                console.log("Intern profile has been created in your team");
                createIntern();
            }
        });
        
};

createManager().then(createEmployee);

const page = function (pageHTML)
{
    fs.writeFile('./dist/index.html', pageHTML, (err) =>
    {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log("It has been created !");
        }
    })
}

createManager().then(teamMember => {
    return writeHTMl(teamMember);
})
.then(pageHTML => {
    page(pageHTML);
})
.catch((err) => {
    if (err)
    {
        console.log(err);
    }
});