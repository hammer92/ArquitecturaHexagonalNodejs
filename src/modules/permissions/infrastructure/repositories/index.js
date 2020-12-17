const AuthPerRepository = require('./authPerRepository')
const AuthPerActRepository = require('./authPerActRepository')
const { AuthPer,AuthPerAct, AuthUsr, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authPerRepository: new AuthPerRepository(AuthPer, Sequelize),
    authPerActRepository: new AuthPerActRepository(AuthPerAct, AuthUsr, Sequelize)
}