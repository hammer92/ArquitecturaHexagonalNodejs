const AuthGpsRepository = require('./authGpsRepository')
const { repositories } = require('../../../permissions')
const sequelize = require('../../../../loaders/sequelize');

module.exports = {
    authGpsRepository: new AuthGpsRepository(sequelize),
    authPerActRepository: repositories.authPerActRepository
}