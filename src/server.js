'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('This was pushed by Github!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
