const AuthUsrRepository = require('./authUsrRepository')
const {authPerActRepository} = require('../../../permissions/infrastructure/repositories')
const { AuthUsr, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(AuthUsr, Sequelize),
    authPerActRepository
}