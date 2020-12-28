
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Erica', 10, 'siegel.erica@gmail.com');

    expect(employee.name).toBe('Erica');
    expect(employee.id).toBe(10);
    expect(employee.email).toBe('siegel.erica@gmail.com');
    
});

test("gets employee's name from prompt", () => {
    const employee = new Employee('Erica');

    expect(employee.getName()).toBe('Erica');
});

test("gets employee's id from prompt", () => {
    const employee = new Employee('Erica', 10, 'siegel.erica@gmail.com');

    expect(employee.getId()).toBe(10);
});

test("Can get email via getEmail()", () => {
    const employee = new Employee('Erica', 10, 'siegel.erica@gmail.com');

    expect(employee.getEmail()).toBe('siegel.erica@gmail.com');
});

test("getRole() will return 'Employee'", () => {
    const employee = new Employee('Erica', 10, 'siegel.erica@gmail.com');
    
    expect(employee.getRole()).toBe('Employee');
});