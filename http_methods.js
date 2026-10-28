
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method + ' request received');
    next();
});

app.get('/student', (req, res) => {
    res.send('GET: Display student details');
});

app.post('/student1', (req, res) => {
    res.send('POST: Add a new student');
});

app.put('/student', (req, res) => {
    res.send('PUT: Update student details');
});

app.patch('/student', (req, res) => {
    res.send('PATCH: Update part of student details');
});

app.delete('/student', (req, res) => {
    res.send('DELETE: Delete student details');
});

app.all('/test', (req, res) => {
    res.send('ALL: Handles every HTTP method at /test');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
