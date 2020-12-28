const AuthUsrRepository = require('./authUsrRepository')
const AuthUsrTokRepository = require('./authUsrTokRepository')
const { repositories } = require('../../../permissions')
const sequelize = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(sequelize),
    authUsrTokRepository: new AuthUsrTokRepository(sequelize),
    authPerActRepository: repositories.authPerActRepository
}