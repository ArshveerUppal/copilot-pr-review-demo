const db = require('../models/db');

async function createUser(name, email, password) {
    if (!name || !email || !password) return;

    // BAD: storing raw password
    const user = { id: Date.now(), name, email, password };
    console.log("User created:", user); // PII leak
    await db.saveUser(user);
    return user;
}

module.exports = { createUser };