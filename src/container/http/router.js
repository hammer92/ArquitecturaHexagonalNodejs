const statusMonitor = require('express-status-monitor')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')

const { Router } = require('express')
const { partialRight } = require('ramda')

const createModuleRoutes = require('../utils/create_modules')
const httpLogger = require('./middlewares/http_logger')
const errorHandler = require('./middlewares/error_handler')

module.exports = ({ config, logger }) => {
  const router = Router()

  if (config.env === 'development') {
    router.use(statusMonitor())
  }

  if (config.env !== 'test') {
    router.use(httpLogger(logger))
  }

  const apiRouter = Router()

  apiRouter
    .use(cors({
      origin: [
        'http://localhost:3000'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
  apiRouter.use(bodyParser.json())
  apiRouter.use(compression())

  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', createModuleRoutes(controllerPath))
   *
   * The `controllerPath` is relative to the `src/modules` folder
   */

  apiRouter.use('/security', createModuleRoutes('security-scur').router)
  apiRouter.use('/common', createModuleRoutes('common-comm').router)

  router.use(`/api/${config.version}`, apiRouter)
  router.use(partialRight(errorHandler, [logger, config]))

  return router
}
