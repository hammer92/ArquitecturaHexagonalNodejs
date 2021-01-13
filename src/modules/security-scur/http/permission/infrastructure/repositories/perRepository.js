module.exports = ({ models: { ScurPer },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(ScurPer, arg)

  const create = (...args) => ScurPer.create(...args)

  const update = (...args) => updateGlobal(ScurPer, ...args)

  const destroy = (...args) => ScurPer.destroy(...args)

  return {
    getPaginate,
    create,
    update,
    destroy
  }
}