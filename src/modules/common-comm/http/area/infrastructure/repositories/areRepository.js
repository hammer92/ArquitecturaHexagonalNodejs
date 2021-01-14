module.exports = ({ models: { CommAre },/*sequelize, Sequelize*/ }, { paginateGlobal, updateGlobal }) => {

  const getPaginate = (arg) => paginateGlobal(CommAre, arg)
  const all = (...arg) => CommAre.findAll(...arg)

  const create = (...args) => CommAre.create(...args)

  const update = (...args) => updateGlobal(CommAre, ...args)

  const destroy = (...args) => CommAre.destroy(...args)

  return {
    all,
    getPaginate,
    create,
    update,
    destroy
  }
}