const container = require('src/container')
const router = require('./router')
const instance = require('./http/user/infrastructure/controller')

module.exports = () => {
  const { application, logger, response, auth } = container.cradle

  return {
    login: instance({ application, logger, response, auth }).AuthUser,
    router: router({ logger, response, application, auth })
  }
}
