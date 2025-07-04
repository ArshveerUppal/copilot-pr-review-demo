// taskService.test.js

const { createTask, getTask, completeTask, _tasks } = require('./taskService');

describe('Task Service - Deadline', () => {
  beforeEach(() => _tasks.length = 0);

  test('creates a task with valid deadline', () => {
    const deadline = new Date(Date.now() + 3600 * 1000).toISOString(); // 1 hour from now
    const task = createTask({ title: "Test", description: "Deadline test", deadline });
    expect(task.deadline).toBe(deadline);
  });

  test('throws error if deadline is invalid', () => {
    expect(() => {
      createTask({ title: "Test", description: "", deadline: "invalid-date" });
    }).toThrow("Invalid or missing deadline.");
  });

  test('throws error if deadline is in the past', () => {
    const deadline = new Date(Date.now() - 3600 * 1000).toISOString(); // 1 hour ago
    expect(() => {
      createTask({ title: "Test", description: "", deadline });
    }).toThrow("Deadline must be in the future.");
  });

  test('marks task as overdue if deadline passed and not completed', () => {
    const past = new Date(Date.now() - 3600 * 1000).toISOString(); // 1 hour ago
    const task = {
      id: 1,
      title: "Old Task",
      description: "",
      deadline: past,
      completed: false
    };
    _tasks.push(task);
    const result = getTask(1);
    expect(result.isOverdue).toBe(true);
  });

  test('does not mark completed task as overdue', () => {
    const past = new Date(Date.now() - 3600 * 1000).toISOString();
    const task = {
      id: 1,
      title: "Done Task",
      description: "",
      deadline: past,
      completed: true
    };
    _tasks.push(task);
    const result = getTask(1);
    expect(result.isOverdue).toBe(false);
  });
});
