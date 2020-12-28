const AuthPerRepository = require('./authPerRepository')
const AuthPerActRepository = require('./authPerActRepository')
const sequelize = require('../../../../loaders/sequelize');

module.exports = {
    authPerRepository: new AuthPerRepository(sequelize),
    authPerActRepository: new AuthPerActRepository(sequelize)
}