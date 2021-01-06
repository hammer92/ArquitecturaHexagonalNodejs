const groups_router = require('./http/groups/router')
const { Router } = require('express')
const router = Router()
module.exports = ({ application, response, logger }) => {

  router.use('/groups', groups_router({ application, response, logger }))
  return router
}
