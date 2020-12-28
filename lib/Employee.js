class Employee {
    // employee object
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // use prompt to get employee name
    getName() {
        // console.log(`Employee Name: ${this.name}`);
        return this.name;
    }

    // use prompt to get employee ID
    getId() {
        // console.log(`Employee Id: ${this.id}`);
        return this.id;
    }
    
    // use prompt to get employee ID
    getEmail() {
        // console.log(`Employee Email: ${this.email}`);
        return this.email;
    }

    // get role object
    getRole() {
        // console.log(`Employee Email: ${this.email}`);
        return 'Employee';
    }
}

module.exports = Employee;