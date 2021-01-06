
const { Router } = require('express')
const instance = require('./infrastructure/controller')


module.exports = ({ application, response, logger}) => {
  const router = Router()
  const controller = instance({ application, response, logger})
  // router.get('/', controller.getAllGps)
  return router
}