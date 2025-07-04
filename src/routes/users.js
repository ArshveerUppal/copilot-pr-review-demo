const express = require('express');
const router = express.Router();
const { createUser } = require('../services/userService');

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    res.status(201).json(user);
});

module.exports = router;