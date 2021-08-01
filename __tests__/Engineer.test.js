const Engineer = require('../lib/Engineer');

test('creates a employee object', () =>
{
    const engineer = new Engineer('Kyle', 'KY', 'KY@gmail.com', 'kylehub');

    expect(engineer.name).toBe('Kyle');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test('gets engineer name', () =>
{
    const engineer = new Engineer('Kyle', 'KY', 'KY@gmail.com', 'kylehub');

    expect(engineer.getName()).toEqual(expect.stringContaining('Kyle'));
});

test('gets engineer ID', () =>
{
    const engineer = new Engineer('Kyle', 'KY', 'KY@gmail.com', 'kylehub');

    expect(engineer.getId()).toEqual(expect.stringContaining('KY'));
});

test('gets engineer email', () =>
{
    const engineer = new Engineer('Kyle', 'KY', 'KY@gmail.com', 'kylehub');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('KY@gmail.com'));
});

test('gets engineer role', () =>
{
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test('gets engineer github username', () =>
{
    const engineer = new Engineer('Kyle', 'KY', 'KY@gmail.com', 'kylehub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('kylehub'));
});