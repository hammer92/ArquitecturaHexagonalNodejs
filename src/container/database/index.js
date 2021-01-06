const sequelize = require('./sequelize')

module.exports = ({ logger, config }) => {
  if (!config.db) {
    logger.error('Database config file log not found, disabling database.')
    return false
  }
  return sequelize({ config })
}
