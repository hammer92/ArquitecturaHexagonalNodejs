const { comparePassword } = require('src/container/support/encryption')

module.exports = (
  { models: { ScurUsr },sequelize/*sequelize, Sequelize*/ },
  { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(ScurUsr, arg)

  const create = (...args) => ScurUsr.create(...args)

  const update = (...args) => updateGlobal(ScurUsr, ...args)

  const destroy = (...args) => ScurUsr.destroy(...args)

  const findById = (...args) =>
    ScurUsr.findByPk(...args)
      .then(({ dataValues }) => dataValues)
      .catch((error) => { throw new Error(error) })

  const findOne = (...args) =>
    ScurUsr.findOne(...args)
      .then(({ dataValues }) => dataValues || {})
      .catch((error) => { throw new Error(error) })

  const validatePassword = (endcodedPassword) => (password) =>
    comparePassword(password, endcodedPassword)


  return {
    getPaginate,
    create,
    update,
    destroy,
    findById,
    findOne,
    validatePassword
  }
}