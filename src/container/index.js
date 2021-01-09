const { createContainer, asValue, asFunction } = require('awilix')
// you can do this
const app = require('./app')
const server = require('./http/server')
const router = require('./http/router')
const config = require('../../config')
const logger = require('./logger')
const database = require('./database')
const response = require('./support/response')
const date = require('./support/date')
const repository = require('./http/repositories')
const application = require('./http/application')
const auth = require('./http/auth')
const jwt = require('./jwt')

const index = createContainer()

// SYSTEM
index
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton(),
    database: asFunction(database).singleton(),
    response: asFunction(response).singleton(),
    date: asFunction(date).singleton(),
    config: asValue(config),
    repository: asFunction(repository).singleton(),
    application: asFunction(application).singleton(),
    auth: asFunction(auth).singleton(),
    jwt: asFunction(jwt).singleton()
  })

module.exports = index
