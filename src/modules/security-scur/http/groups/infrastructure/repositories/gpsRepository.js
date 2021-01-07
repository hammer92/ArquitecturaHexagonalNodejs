module.exports = ({ models: { ScurGps },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(ScurGps, arg)

  const create = (...args) => ScurGps.create(...args)

  const update = (...args) => updateGlobal(ScurGps, ...args)

  const destroy = (...args) => ScurGps.destroy(...args)

  return {
    getPaginate,
    create,
    update,
    destroy
  }
}