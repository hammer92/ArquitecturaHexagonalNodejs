module.exports = ({ models: { CommSet },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommSet, arg)

  const create = (...args) => CommSet.create(...args)

  const update = (...args) => updateGlobal(CommSet, ...args)

  const destroy = (...args) => CommSet.destroy(...args)

  return {
    getPaginate,
    create,
    update,
    destroy
  }
}