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
            // push data to array based off of the role chosen
            if (data.role === 'Manager') {
                this.teamData.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                // once data is pushed to the array, check to see if the employee would like to enter another employee
                return this.endQuestions();
            } else if (data.role === 'Engineer') {
                this.teamData.push(new Engineer(data.name, data.id, data.email, data.github));
                // once data is pushed to the array, check to see if the employee would like to enter another employee
                return this.endQuestions();
            } else if (data.role === 'Intern') {
                this.teamData.push(new Intern(data.name, data.id, data.email, data.school));
                // once data is pushed to the array, check to see if the employee would like to enter another employee
                return this.endQuestions();
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
                choices: ['Add Employee', 'Finish']
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

        const initHtml = generatePage();
        // write initial index.html with out cards
        fs.writeFile('./dist/index.html', initHtml, err => {
            if (err) {
                console.log(err);
            }
        });

        // read new index.html to replace <div></div> with generated cards.
        fs.readFile('./dist/index.html', 'utf8', (err, htmlCard) => {

            // replaces <div></div> with html from generateEmployeeCards
            htmlCard = htmlCard.split("<div><div>").join(this.generateEmployeeCards())

            // write the html file with the data from generateEmployeeCards
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

        
    }
    // function to generate a card for each employee
    generateEmployeeCards() {

        // empty card variable
        this.cards = ``;

        // loop through each employee and place their info into the html based off their role
        this.teamData.forEach(employee => {
            // console.log(employee);
                // empty variables for specific card information
                let roleSpec = '';
                let icon = '';
                let style = '';
                let border = '';
                switch (employee.getRole()) {
                    // if they are a Manager, place role specific styles, icons, and data in proper places
                    case "Manager":
                        roleSpec = `Office Number: ${employee.getOfficeNumber()}`;
                        icon = `briefcase`;
                        style = `border-primary manager`;
                        border = `border-primary`;
                        break;
                    // if they are a Engineer, place role specific styles, icons, and data in proper places
                    case "Engineer":
                        roleSpec = `<a href="https://github.com/${employee.getGithub()}" target="new" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i> View GitHub</a>`;
                        icon = `tools`;
                        style = `border-warning engineer`;
                        border = `border-warning`;
                        break;
                    // if they are a Intern, place role specific styles, icons, and data in proper places
                    case "Intern":
                        roleSpec = `School: ${employee.getSchool()}`;
                        icon = `user-graduate`;
                        style = `border-success intern`;
                        border = `border-success`;
                        break;
                }
            // html to generate for each employee card
            this.card = `
            <div class="col">
                <div class="card h-100 mb-3 ${style}" style="max-width: 18rem;">
                    <div class="card-header">
                        <div>
                            <h4 class="card-title">${employee.getName()}</h4>
                        </div>
                        <div>
                            <h5 class="card-title"><i class="fas fa-${icon}"></i> ${employee.getRole()}</h5>
                        </div>
                    </div>
                    <div class="card-body bg-white card-bg text-dark">
                        <div class="card ${border}">
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
            </div>
          `;
          //add card to cards variable
          this.cards += this.card;
        });
        return this.cards;
    }
}


module.exports = InitilizeApp;