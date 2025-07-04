const db = require('../models/db');

async function getUserByEmail(email) {
  const user = await db.getUserByEmail(email);
  return user;
}

async function createUser(name, email, password) {
  // BAD: Storing raw password, no hashing!
  const user = { id: Date.now(), name, email, password };
  await db.saveUser(user);
  return user;
}

module.exports = { getUserByEmail, createUser };
