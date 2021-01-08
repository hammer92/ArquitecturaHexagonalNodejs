const setting_router = require('./http/setting/router')
const modules_router = require('./http/modules/router')
const { Router } = require('express')
const router = Router()
module.exports = ({ application, response, logger }) => {
  router.use('/setting',setting_router({ application, response, logger}) )
  router.use('/modules',modules_router({ application, response, logger}) )
  return router
}
