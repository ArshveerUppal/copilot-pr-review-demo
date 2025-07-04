const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));