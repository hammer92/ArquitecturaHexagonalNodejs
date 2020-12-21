const express = require('express');
const app = express();

require('./src/loaders')(app)

module.exports = app;
