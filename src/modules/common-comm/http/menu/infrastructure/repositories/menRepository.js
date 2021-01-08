module.exports = ({ models: { CommMen },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommMen, arg)
  const all = (...arg) => CommMen.findAll(...arg)

  const create = (...args) => CommMen.create(...args)

  const update = (...args) => updateGlobal(CommMen, ...args)

  const destroy = (...args) => CommMen.destroy(...args)

  return {
    all,
    getPaginate,
    create,
    update,
    destroy
  }
}