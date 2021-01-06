module.exports = ({ models: { ScurGps },/*sequelize, Sequelize*/ }, { paginate }) => {

  const getPaginate = (arg)=>{
    return paginate(ScurGps, arg)
  }

  const create = (...args) =>
    ScurGps.create(...args)

  const update = (...args) =>
    ScurGps.update(...args)

  const destroy = (...args) =>
    ScurGps.destroy(...args)

  return {
    getPaginate,
    create,
    update,
    destroy
  }
}