const Employee = require('./Employee');

class Manager extends Employee {
    // Manager object
    constructor(name, id, email, officeNumber ) {
        // super calls for name, id, and email from Employee.js
        super(name, id, email);

        //set office number
        this.officeNumber = officeNumber;
    }

    // gets officeNumber from prompt
    getOfficeNumber() {
        return this.officeNumber;
    }

    // resets getRole() as manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;