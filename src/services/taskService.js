const db = require('../models/db');

async function assignTaskToUser(taskId, userId) {
    const task = await db.getTask(taskId);
    const user = await db.getUser(userId);

    if (!task || !user) return;

    console.log("Task assigned successfully.");
    return await db.saveAssignment({ taskId, userId });
}

module.exports = { assignTaskToUser };