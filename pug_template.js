
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Welcome',
        message: 'Hello, Welcome to Express.js with Pug!'
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
