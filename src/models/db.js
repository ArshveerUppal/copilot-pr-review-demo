const users = [{ id: 1, name: "John" }];
const tasks = [{ id: 1, title: "Fix Bug" }];
const assignments = [];

module.exports = {
  async saveUser(user) { users.push(user); },
  async getUser(id) { return users.find(u => u.id == id); },
  async getTask(id) { return tasks.find(t => t.id == id); },
  async saveAssignment(a) { assignments.push(a); return a; },
  async getAssignment(taskId) {
    return assignments.find(a => a.taskId == taskId);
  }
};
