const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')
const remove = require('./delete')
module.exports = ({ application, response, logger}) => {
  return {
    getAllGps: getAll({ application, response, logger }),
    createGps: create({ application, response, logger }),
    updateGps: update({ application, response, logger }),
    removeGps: remove({ application, response, logger }),
  }
}
