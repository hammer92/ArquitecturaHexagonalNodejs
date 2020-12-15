const AuthUsrRepository = require('./authUsrRepository')
const { AuthUsr, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    authUsrRepository: new AuthUsrRepository(AuthUsr, Sequelize)
}