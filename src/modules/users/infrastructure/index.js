const listController = require('./listController')
const deleteController = require('./deleteController')
const createController = require('./createController')
const updateController = require('./updateController')
const loginController = require('./loginController')
const logoutController = require('./logoutController')
const assignPerListController = require('./assignPerListController')
const assignPerCrearController = require('./assignPerCrearController')
module.exports = {
    listController, deleteController, createController, updateController, logoutController,
    assignPerListController, assignPerCrearController, loginController
}