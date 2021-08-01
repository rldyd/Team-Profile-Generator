const Employee = require('../lib/Employee');

test('creates a employee object', () =>
{
    const employee = new Employee('Kyle', 'KY', 'KY@gmail.com');

    expect(employee.name).toBe('Kyle');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

});

test('gets employees name', () =>
{
    const employee = new Employee('Kyle');

    expect(employee.getName()).toEqual(expect.stringContaining('Kyle'));
});

test('gets employees ID', () =>
{
    const employee = new Employee('Kyle', 'KY');

    expect(employee.getId()).toEqual(expect.stringContaining('KY'));
});

test('gets employees email', () =>
{
    const employee = new Employee('Kyle', 'KY','KY@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('KY@gmail.com'));
});

test('gets employees role', () =>
{
    const employee = new Employee('Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});