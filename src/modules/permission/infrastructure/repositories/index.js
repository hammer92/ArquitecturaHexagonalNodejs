const AuthPerRepository = require('./authPerRepository')
const { AuthPer, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authPerRepository: new AuthPerRepository(AuthPer, Sequelize)
}