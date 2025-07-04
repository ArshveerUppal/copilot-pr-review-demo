// taskService.js

const tasks = [];

function createTask({ title, description, deadline }) {
  if (!title) {
    throw new Error("Title is required.");
  }

  const taskDeadline = new Date(deadline);
  const now = new Date();

  if (!deadline || isNaN(taskDeadline.getTime())) {
    throw new Error("Invalid or missing deadline.");
  }

  if (taskDeadline < now) {
    throw new Error("Deadline must be in the future.");
  }

  const task = {
    id: tasks.length + 1,
    title,
    description,
    deadline: taskDeadline.toISOString(),
    completed: false
  };

  tasks.push(task);
  return task;
}

function getTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  const now = new Date();
  return {
    ...task,
    isOverdue: !task.completed && new Date(task.deadline) < now
  };
}

function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
  }
  return task;
}

module.exports = { createTask, getTask, completeTask, _tasks: tasks };
