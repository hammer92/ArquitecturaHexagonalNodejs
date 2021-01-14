const setting_router = require('./http/setting/router')
const modules_router = require('./http/menu/router')
const departments_router = require('./http/department/router')
const cities_router = require('./http/city/router')
const branchOffices_router = require('./http/branchOffice/router')
const { Router } = require('express')
const Status = require('http-status')

const router = Router()
module.exports = ({ application, response, logger }) => {
  router.use('/setting',setting_router({ application, response, logger, Status}) )
  router.use('/menu',modules_router({ application, response, logger, Status}) )
  router.use('/department',departments_router({ application, response, logger, Status}) )
  router.use('/city',cities_router({ application, response, logger, Status}) )
  router.use('/branch-office',branchOffices_router({ application, response, logger, Status}) )
  return router
}
