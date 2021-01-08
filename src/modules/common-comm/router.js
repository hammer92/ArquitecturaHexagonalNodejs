const setting_router = require('./http/setting/router')
const modules_router = require('./http/menu/router')
const { Router } = require('express')
const Status = require('http-status')

const router = Router()
module.exports = ({ application, response, logger }) => {
  router.use('/setting',setting_router({ application, response, logger, Status}) )
  router.use('/menu',modules_router({ application, response, logger, Status}) )
  return router
}
