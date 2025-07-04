const { createUser } = require('../src/services/userService');

test('creates a user with valid inputs', async () => {
    const user = await createUser('Alice', 'alice@example.com', 'password123');
    expect(user).toHaveProperty('email', 'alice@example.com');
});