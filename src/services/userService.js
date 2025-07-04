const db = require('../models/db');

async function getUserByEmail(email) {
  const users = await db.getAllUsers();
  const user = users.find(u => u.email === email);
  return user;
}

async function createUser(name, email, password) {
  // BAD: Storing raw password, no hashing!
  const user = { id: Date.now(), name, email, password };
  await db.saveUser(user);
  return user;
}

module.exports = { getUserByEmail, createUser };
