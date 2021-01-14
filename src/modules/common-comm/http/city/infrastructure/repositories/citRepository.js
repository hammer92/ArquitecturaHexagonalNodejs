module.exports = ({ models: { CommCit },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommCit, arg)
  const all = (...arg) => CommCit.findAll(...arg)

  const create = (...args) => CommCit.create(...args)

  const update = (...args) => updateGlobal(CommCit, ...args)

  const destroy = (...args) => CommCit.destroy(...args)

  return {
    all,
    getPaginate,
    create,
    update,
    destroy
  }
}