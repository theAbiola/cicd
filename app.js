const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('did we get here?');
  const output = 'Works on my machine.';
  res.send(output);
});

module.exports = app;
