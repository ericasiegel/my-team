const Intern = require("../lib/Intern");

test('sets school in object', () => {
    const intern = new Intern('Erica', 10, 'siegel.erica@gmail.com', 'UCLA');

    expect(intern.school).toBe('UCLA');
    
});

test('gets GitHub link from prompt', () => {
    const intern = new Intern('Erica', 10, 'siegel.erica@gmail.com', 'UCLA');

    expect(intern.getSchool()).toBe('UCLA');
    
});

test('resets getRole as Engineer', () => {
    const intern = new Intern('Erica', 10, 'siegel.erica@gmail.com', 'UCLA');

    expect(intern.getRole()).toBe('Intern');
    
});