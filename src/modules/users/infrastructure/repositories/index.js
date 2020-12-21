const AuthUsrRepository = require('./authUsrRepository')
const AuthUsrTokRepository = require('./authUsrTokRepository')
const {authPerActRepository} = require('../../../permissions/infrastructure/repositories')
const { AuthUsr, AuthUsrTok, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(AuthUsr, Sequelize),
    authUsrTokRepository: new AuthUsrTokRepository(AuthUsrTok, Sequelize),
    authPerActRepository
}