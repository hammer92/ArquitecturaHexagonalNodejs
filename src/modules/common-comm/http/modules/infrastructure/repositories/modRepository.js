module.exports = ({ models: { CommMod },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommMod, arg)

  const create = (...args) => CommMod.create(...args)

  const update = (...args) => updateGlobal(CommMod, ...args)

  const destroy = (...args) => CommMod.destroy(...args)

  return {
    getPaginate,
    create,
    update,
    destroy
  }
}