const { check } = require('../../../../shared/infrastructure/request')
const pk = require('./pk')
const paginate = require('./paginate')
const create = require('./create')
const update = require('./update')
module.exports = {
    pk, paginate, create, update, check
}