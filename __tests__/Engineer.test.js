const Engineer = require("../lib/Engineer");

test('sets github link in object', () => {
    const engineer = new Engineer('Erica', 10, 'siegel.erica@gmail.com', 'github.com');

    expect(engineer.github).toBe('github.com');
    
});

test('gets GitHub link from prompt', () => {
    const engineer = new Engineer('Erica', 10, 'siegel.erica@gmail.com', 'github.com');

    expect(engineer.getGithub()).toBe('github.com');
    
});

test('resets getRole as Engineer', () => {
    const engineer = new Engineer('Erica', 10, 'siegel.erica@gmail.com', 'github.com');

    expect(engineer.getRole()).toBe('Engineer');
    
});