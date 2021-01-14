const getCity = require('./get')
const createCity = require('./create')
const updateCity = require('./update')
const deleteCity = require('./delete')

module.exports = (container) => {
  return {
    getCity: getCity(container),
    createCity: createCity(container),
    updateCity: updateCity(container),
    deleteCity: deleteCity(container),
  }
}
