const groups_router = require('./http/group/router')
const user_router = require('./http/user/router')
const permission_router = require('./http/permission/router')
const { Router } = require('express')
const Status = require('http-status')
const router = Router()
module.exports = ({ application, response, logger, auth }) => {

  router.use('/groups', groups_router({ application, response, logger, Status, auth }))
  router.use('/user', user_router({ application, response, logger, Status, auth }))
  router.use('/permission', permission_router({ application, response, logger, Status, auth }))
  return router
}
