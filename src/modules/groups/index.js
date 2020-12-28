const infrastructure = require('./infrastructure')
const repositories = require('./infrastructure/repositories')
const application = require('./application')
const domain = require('./domain')
const exceptions = require('./domain/exceptions')

module.exports = {
    infrastructure, application, domain, exceptions, repositories
}