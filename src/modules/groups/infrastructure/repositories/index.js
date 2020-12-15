const authGpsRepository = require('./authGpsRepository')
const { AuthGps, AuthUsr, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authGpsRepository: new authGpsRepository(AuthGps, AuthUsr, Sequelize)
}