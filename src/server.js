'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', function (req, res) {
  var test = 1 + 1;
  res.send('This was pushed by Github!\n' + 'This is a sum:' + test);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
