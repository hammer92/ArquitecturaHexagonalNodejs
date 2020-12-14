const config = require('./src/loaders/config');
const express = require('express');
const Logger  = require('./src/loaders/logger');


const app = express();

require('./src/loaders')(app)

app.listen(config.port, () => {
  Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
}).on('error', err => {
    // Logger.error(err);
  console.log(err)
    process.exit(1);
  });

