const createCase = require('./createCase')
const listCase = require('./listCase')
const updateCase = require('./updateCase')
const deleteCase = require('./deleteCase')
const { assignPerActCase, listPerActCase } = require('../../permissions/application')


module.exports = {
    createCase,
    listCase,
    updateCase,
    deleteCase,
    assignPerActCase,
    listPerActCase,
}