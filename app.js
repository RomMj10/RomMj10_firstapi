const express = require('express');
const cors = require('cors');
const app = express();

const studentRoutes = require('./routes/student.routes');

app.use(cors(`https://localhost:3000`));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Simple API for student management system');
});

app.use('/api/students', studentRoutes);

module.exports = app;