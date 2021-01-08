const Status = require('http-status')
const getModule = require('./get')
const createModule = require('./create')
const updateModule = require('./update')
const deleteModule = require('./delete')

module.exports = ({ application, response, logger}) => {
  return {
    getModule: getModule({ application, response, logger, Status}),
    createModule: createModule({ application, response, logger, Status}),
    updateModule: updateModule({ application, response, logger, Status}),
    deleteModule: deleteModule({ application, response, logger, Status}),
  }
}
