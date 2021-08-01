const Intern = require('../lib/Intern');

test('creates a Intern object', () =>
{
    const intern = new Intern('Kyle', 'KY', 'KY@gmail.com', 'GWU');

    expect(intern.name).toBe('Kyle');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test('gets Intern name', () =>
{
    const intern = new Intern('Kyle', 'KY', 'KY@gmail.com', 'GWU');

    expect(intern.getName()).toEqual(expect.stringContaining('Kyle'));
});

test('gets Intern ID', () =>
{
    const intern = new Intern('Kyle', 'KY', 'KY@gmail.com', 'GWU');

    expect(intern.getId()).toEqual(expect.stringContaining('KY'));
});

test('gets Intern email', () =>
{
    const intern = new Intern('Kyle', 'KY', 'KY@gmail.com', 'GWU');

    expect(intern.getEmail()).toEqual(expect.stringContaining('KY@gmail.com'));
});

test('gets Intern role', () =>
{
    const intern = new Intern('Intern');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test('gets Intern School', () =>
{
    const intern = new Intern('Kyle', 'KY', 'KY@gmail.com', 'GWU');

    expect(intern.getSchool()).toEqual(expect.stringContaining('GWU'));
});