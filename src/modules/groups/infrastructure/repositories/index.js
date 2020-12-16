const AuthGpsRepository = require('./authGpsRepository')
const AuthPerActRepository = require('../../../permissions/infrastructure/repositories/authPerActRepository')
const { AuthGps, AuthUsr, AuthPerAct, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authGpsRepository: new AuthGpsRepository(AuthGps, AuthUsr, Sequelize),
    authPerActRepository: new AuthPerActRepository(AuthPerAct, Sequelize)
}