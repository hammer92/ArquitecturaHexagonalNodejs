module.exports = ({ models: { CommDep },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommDep, arg)
  const all = (...arg) => CommDep.findAll(...arg)

  const create = (...args) => CommDep.create(...args)

  const update = (...args) => updateGlobal(CommDep, ...args)

  const destroy = (...args) => CommDep.destroy(...args)

  return {
    all,
    getPaginate,
    create,
    update,
    destroy
  }
}