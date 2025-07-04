const db = require('../models/db');

/**
 * Assign a task to a user if both exist and task isn't already assigned
 */
async function assignTaskToUser(taskId, userId) {
  const task = await db.getTask(taskId);
  const user = await db.getUser(userId);

  if (!task) {
    throw new Error('Task not found');
  }

  if (!user) {
    throw new Error('User not found');
  }

  const existingAssignment = await db.getAssignment(taskId);
  if (existingAssignment) {
    throw new Error('Task is already assigned');
  }

  const assignment = { taskId, userId };
  console.log(`Assigned task ${taskId} to user ${userId}`);

  return await db.saveAssignment(assignment);
}

// TODO - Write more code

module.exports = { assignTaskToUser };
