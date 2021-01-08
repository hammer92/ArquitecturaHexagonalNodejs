const groups_router = require('./http/group/router')
const { Router } = require('express')
const Status = require('http-status')
const router = Router()
module.exports = ({ application, response, logger }) => {

  router.use('/groups', groups_router({ application, response, logger, Status }))
  return router
}
