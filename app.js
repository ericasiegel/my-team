const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generatePage = require('./src/generate-html.js');


class InitilizeApp {
    constructor() {

         // employee array
        this.teamData = [];
    
        // employee questions
        this.employeeQuestions = [
            { // select which role to input information for
                type: "list",
                name: "role",
                message: "What is this employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            { // get employee's name
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
            { // get employee's ID number
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
            {  // get employee's email
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
            {  // get if 'Manager' was selected get the office number
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's office number?",
                when: (userInput) => userInput.role === "Manager"
            },
            {  // if 'Engineer' was selected get their github name
                type: "input",
                name: "github",
                message: "What is the employee's Github?",
                when: (userInput) => userInput.role === "Engineer"
            },
            {  // if 'Intern' was selected get the employee's school
                type: "input",
                name: "school",
                message: "What's the employee's school?",
                when: (userInput) => userInput.role === "Intern"
            },
        ]
    }

    // begin asking the questions by running employeeQuestions through the inquirer.prompt
    startQuestions() {
        inquirer.prompt(this.employeeQuestions).then(data => {
            // console.log(data);
            
            // cycle through the questions and push data to array based off of the role chosen
            switch(data.role) {
                case 'Manager':
                    this.teamData.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                    // once data is pushed to the array, check to see if the employee would like to enter another employee
                    this.endQuestions();
                    break;
                case 'Engineer':
                    this.teamData.push(new Engineer(data.name, data.id, data.email, data.github));
                    // once data is pushed to the array, check to see if the employee would like to enter another employee
                    this.endQuestions();
                    break;
                case 'Intern':
                    this.teamData.push(new Intern(data.name, data.id, data.email, data.school));
                    // once data is pushed to the array, check to see if the employee would like to enter another employee
                    this.endQuestions();
                    break;
            }
        })
    }

    // function to check if the user would like to input another employee or finish the app
    endQuestions() {
        console.log(`
                    ________________________________________________

                        Do You Have Any More Employees To Enter?
                    ________________________________________________
                `)
        inquirer.prompt(
            { // ask the user if they would like to add an employee or finish to write the app
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Another Employee', 'Finish']
            }
        )
        .then(({ action }) => {
            // if 'Finish' was selected, generate the html
            if (action === 'Finish') {
                this.writeProgram();
            
            // if 'Add another employee' is chosen go back to startQuestions() to input another employee
            } else {
                console.log(`
                    ___________________________

                        Add Another Employee
                    ___________________________
                `)
                this.startQuestions();
            }
        })
    }

    // function to write the html after the user selects 'Finish'
    writeProgram() {
        // console.log(this.teamData);
        fs.readFile('./src/page-template.html', 'utf8', (err, htmlCard) => {
            htmlCard = htmlCard.split("<div><div>").join(this.generateEmployeeCards())

            fs.writeFile('./dist/index.html', htmlCard, err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`
                ___________________________________________________________________________________
    
                  Team Directory Created! Check Out index.html In The "dist" Directory To See It!
                ___________________________________________________________________________________
                `);
              
            });
        })

        
        // const pageHTML = generatePage(htmlCard);

        
    }

    generateEmployeeCards() {

        this.cards = ``;

        this.teamData.forEach(employee => {
            // console.log(employee);
                let roleSpec = '';
                let icon = '';
                switch (employee.getRole()) {
                    case "Manager":
                        roleSpec = `Office Number: ${employee.getOfficeNumber()}`;
                        icon = `mug-hot`;
                        break;
                    case "Engineer":
                        roleSpec = `<a href="https://github.com/${employee.getGithub()}" target="new" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i> View GitHub</a>`;
                        icon = `glasses`;
                        break;
                    case "Intern":
                        roleSpec = `School: ${employee.getSchool()}`;
                        icon = `user-graduate`;
                        break;
                }
            this.card = `
        <div class="col">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div>
                        <h4 class="card-title">${employee.getName()}</h4>
                    </div>
                    <div>
                        <h5 class="card-title"><i class="fas fa-${icon}"></i> ${employee.getRole()}</h5>
                    </div>
                </div>
                <div class="card-body card-bg text-dark">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-light">ID: ${employee.getId()}</li>
                        <li class="list-group-item bg-light">
                            Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                        </li>
                        <li class="list-group-item bg-light">${roleSpec}</li>
                    </ul>
                </div>
            </div>
        </div>
          `;
          this.cards += this.card;
        });
        return this.cards;
    }
}


module.exports = InitilizeApp;