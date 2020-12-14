const groupRepository = require('./groupRepository')
const { AuthGps, AuthUsr, sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    groupRepository: new groupRepository(AuthGps, AuthUsr, sequelize)
}