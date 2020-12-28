const Employee = require('./Employee');

class Intern extends Employee {
    // Manager object
    constructor(name, id, email, school ) {
        // super calls for name, id, and email from Employee.js
        super(name, id, email);

        //set office number
        this.school = school;
    }

    // gets school from prompt
    getSchool() {
        return this.school;
    }

    // resets getRole() as Intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;