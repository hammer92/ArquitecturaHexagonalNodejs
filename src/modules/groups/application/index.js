const createGroupCase = require('./createCase')
const listGroupCase = require('./listCase')
const updateGroupCase = require('./updateCase')
const { assignPerActCase, listPerActCase} = require('../../permissions/application')

module.exports = {
    createGroupCase,
    listGroupCase,
    updateGroupCase,
    listPerActCase,
    assignPerActCase,
}