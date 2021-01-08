const Status = require('http-status')
const getSetting = require('./get')
const createSetting = require('./create')
const updateSetting = require('./update')
const deleteSetting = require('./delete')

module.exports = ({ application, response, logger}) => {
  return {
    getSetting: getSetting({ application, response, logger, Status}),
    createSetting: createSetting({ application, response, logger, Status}),
    updateSetting: updateSetting({ application, response, logger, Status}),
    deleteSetting: deleteSetting({ application, response, logger, Status}),
  }
}
