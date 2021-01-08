const getSetting = require('./get')
const createSetting = require('./create')
const updateSetting = require('./update')
const deleteSetting = require('./delete')

module.exports = (container) => {
  return {
    getSetting: getSetting(container),
    createSetting: createSetting(container),
    updateSetting: updateSetting(container),
    deleteSetting: deleteSetting(container),
  }
}
