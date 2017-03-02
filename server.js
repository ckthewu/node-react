'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.get('/bundle.js', function (req, res) {
    res.sendfile(__dirname + '/bundle.js');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
