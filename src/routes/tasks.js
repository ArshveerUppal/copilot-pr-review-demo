const express = require('express');
const router = express.Router();
const { assignTaskToUser } = require('../services/taskService');

router.post('/assign', async (req, res) => {
    const { taskId, userId } = req.body;
    const result = await assignTaskToUser(taskId, userId);
    res.status(200).json(result);
});

module.exports = router;