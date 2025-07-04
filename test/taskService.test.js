const { assignTaskToUser } = require('../src/services/taskService');

test('assigns task to user (happy path)', async () => {
    const result = await assignTaskToUser(1, 2);
    expect(result).toHaveProperty('taskId', 1);
});