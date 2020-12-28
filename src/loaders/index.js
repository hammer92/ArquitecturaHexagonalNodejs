const expressLoader = require('./express')
const Logger  = require('./logger');

module.exports = async (expressApp) => {

    await expressLoader(expressApp);
    Logger.info('✌️ Express loaded');

    require('./sequelize')
    Logger.info('✌️ Database Migrate loaded');

    // require('./hana')
    // Logger.info('✌️ Database Hana loaded');

}