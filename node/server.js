'use strict';

const express = require('express');

const os = require('os');
var hostname = os.hostname();

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("Hello world!!!");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

