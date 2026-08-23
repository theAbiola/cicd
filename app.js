const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const output = 'Works on my machine?';
  res.send(output);
});

module.exports = app;
