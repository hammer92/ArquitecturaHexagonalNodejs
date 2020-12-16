const AuthPerRepository = require('./authPerRepository')
const AuthPerActRepository = require('./authPerActRepository')
const { AuthPer,AuthPerAct, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authPerRepository: new AuthPerRepository(AuthPer, Sequelize),
    authPerActRepository: new AuthPerActRepository(AuthPerAct, Sequelize)
}