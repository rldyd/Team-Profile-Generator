const Manager = require('../lib/Manager');

test('creates a manager object', () =>
{
    const manager = new Manager('Kyle', 'KY', 'KY@gmail.com', 7039998888);

    expect(manager.name).toBe('Kyle');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('gets manager name', () =>
{
    const manager = new Manager('Kyle', 'KY', 'KY@gmail.com', 7039998888);

    expect(manager.getName()).toEqual(expect.stringContaining('Kyle'));
});

test('gets manager ID', () =>
{
    const manager = new Manager('Kyle', 'KY', 'KY@gmail.com', 7039998888);

    expect(manager.getId()).toEqual(expect.stringContaining('KY'));
});

test('gets manager email', () =>
{
    const manager = new Manager('Kyle', 'KY', 'KY@gmail.com', 7039998888);

    expect(manager.getEmail()).toEqual(expect.stringContaining('KY@gmail.com'));
});

test('gets manager role', () =>
{
    const manager = new Manager('Manager');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
