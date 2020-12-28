const Employee = require('./Employee');

class Engineer extends Employee {
    // Engineer object
    constructor(name, id, email, github) {
        // super calls for name, id, and email from Employee.js
        super(name, id, email);

        //set github
        this.github = github;
    }

    // gets officeNumber from prompt
    getGithub() {
        return this.github;
    }

    // resets getRole() as engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;