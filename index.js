const fs = require('fs');
const inquirer = require('inquirer');

// Employee template based on these below.
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generatePage = require('./src/generate-html.js');

const employees = [];

// company title prompt
const promptCompany = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'company',
            message: 'What is your company name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your company name!');
                    return false;
                }
            }
        }
    ]);  
};

// manager prompts
const promptManager = employeeData => {
    console.log(`
    ============================
    Add Your Manager Information
    ============================
    ** All Fields are Required **
    `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID number?",
                validate: managerId => {
                    if (managerId) {
                        return true;
                    } else {
                        console.log("Please enter the manager's ID number!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    } else {
                        console.log("Please enter the manager's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
            }
            
            
        ])
        .then(managerData => {
            manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            employees.push(manager);
            // console.log(employees);
            return managerData;
        });
};
const promptEmployees = employeeData => {
    console.log(`
    ============================
    Add New Employee Information
    ============================
    ** All Fields are Required **
    `);

    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is this employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID number?",
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log("Please enter the employee's ID number!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
                validate: employeeEmail => {
                    if (employeeEmail) {
                        return true;
                    } else {
                        console.log("Please enter the employee's email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's Github?",
                when: (userInput) => userInput.role === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "What's the employee's school?",
                when: (userInput) => userInput.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
            
        ])
        .then(employeeData => {
            if (employeeData.role === 'Engineer') {
                const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
                employees.push(engineer);
            } else if (employeeData.role === "Intern") {
                const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
                employees.push(intern);
            } 
            console.log(employees)
            // if you want to add another employee
            if (employeeData.confirmAddEmployee) {
                return promptEmployees(employeeData);
            } else {
                return employeeData;
            }
        });
};

promptCompany()
// promptManager()
    .then(promptManager)
    .then(promptEmployees)
    // console.log(employees);
    .then(employeeData => {
        // console.log(employeeData);
        const pageHTML = generatePage(employeeData);

        fs.writeFile('./dist/index.html', pageHTML, err => {
          if (err) {
              console.log(err);
              return;
          }
          console.log('Page created! Check out index.html in this directory to see it!');
          
          fs.copyFile('./src/style.css', './dist/style.css', err => {
              if (err) {
                  console.log(err);
                  return;
              }
              console.log('Style sheet copied successfully!')
          })
        });
    });