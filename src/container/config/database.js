const path = require('path')
const dotEnvPath = path.resolve('.env')

/**
 * since mocha don't see enviroment variables we have to use dotenv
 */
require('dotenv').config({ path: dotEnvPath })

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_DATABASE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DRIVER || 'postgres',
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    'url': process.env.DATABASE_URL_TEST,
    'dialect': 'postgres',
    logging: false // remove logs
  },
  staging: {
    'url': process.env.DATABASE_URL_STAGING,
    'dialect': 'postgres',
    'ssl': true,
    'dialectOptions': {
      'ssl': {
        'require': true
      }
    }
  },
  production: {
    'url': process.env.DATABASE_URL_PRODUCTION,
    'dialect': 'postgres',
    'ssl': true,
    'dialectOptions': {
      'ssl': {
        'require': true
      }
    }
  }
}
