const container = require('src/container')
const router = require('./router')

module.exports = () => {
  const { application, logger, response } = container.cradle

  return {
    router: router({ logger, response, application })
  }
}
