module.exports = ({ models: { CommBof },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommBof, arg)
  const all = (...arg) => CommBof.findAll(...arg)

  const create = (...args) => CommBof.create(...args)

  const update = (...args) => updateGlobal(CommBof, ...args)

  const destroy = (...args) => CommBof.destroy(...args)

  return {
    all,
    getPaginate,
    create,
    update,
    destroy
  }
}