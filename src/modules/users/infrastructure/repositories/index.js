const AuthUsrRepository = require('./authUsrRepository')
const {authPerActRepository} = require('../../../permissions/infrastructure/repositories')
const { AuthUsr, AuthUsrTok, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(AuthUsr, AuthUsrTok, Sequelize),
    authPerActRepository
}