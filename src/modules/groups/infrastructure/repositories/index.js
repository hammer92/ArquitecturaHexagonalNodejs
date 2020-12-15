const groupRepository = require('./groupRepository')
const { AuthGps, AuthUsr, Sequelize } = require('../../../../loaders/sequelize');

module.exports = {
    groupRepository: new groupRepository(AuthGps, AuthUsr, Sequelize)
}