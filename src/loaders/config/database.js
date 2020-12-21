//const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

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
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: process.env.CI_DB_HOST,
        port: process.env.CI_DB_PORT,
        dialect: process.env.CI_DB_DRIVER,
        dialectOptions: {
            bigNumberStrings: true,
        },
        logging: false,
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        port: process.env.PROD_DB_PORT,
        dialect: process.env.PROD_DB_DRIVER,
        logging: false,
        dialectOptions: {
            bigNumberStrings: true,
           /* ssl: {
                ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
            }*/
        }
    }
};