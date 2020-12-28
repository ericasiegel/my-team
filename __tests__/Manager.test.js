const Manager = require("../lib/Manager");

test('sets office number in object', () => {
    const manager = new Manager('Erica', 10, 'siegel.erica@gmail.com', 702);

    expect(manager.officeNumber).toBe(702);
    
});

test('gets office number from prompt', () => {
    const manager = new Manager('Erica', 10, 'siegel.erica@gmail.com', 702);

    expect(manager.getOfficeNumber()).toBe(702);
    
});

test('resets getRole as Manager', () => {
    const manager = new Manager('Erica', 10, 'siegel.erica@gmail.com', 702);

    expect(manager.getRole()).toBe('Manager');
    
});