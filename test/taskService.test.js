const { assignTaskToUser } = require('../src/services/taskService');

test('assigns task to user (happy path)', async () => {
  const result = await assignTaskToUser(1, 1);
  expect(result).toHaveProperty('taskId', 1);
});

test('throws error if task does not exist', async () => {
  await expect(assignTaskToUser(999, 1)).rejects.toThrow('Task not found');
});

test('throws error if user does not exist', async () => {
  await expect(assignTaskToUser(1, 999)).rejects.toThrow('User not found');
});

test('throws error if task is already assigned', async () => {
  // First assignment should work
  await assignTaskToUser(1, 1);

  // Second should throw
  await expect(assignTaskToUser(1, 1)).rejects.toThrow('Task is already assigned');
});
