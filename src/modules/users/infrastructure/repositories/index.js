const AuthUsrRepository = require('./authUsrRepository')
const AuthPerActRepository = require('../../../permissions/infrastructure/repositories/authPerActRepository')
const { AuthUsr, AuthPerAct, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(AuthUsr, Sequelize),
    authPerActRepository: new AuthPerActRepository(AuthPerAct, Sequelize)
}