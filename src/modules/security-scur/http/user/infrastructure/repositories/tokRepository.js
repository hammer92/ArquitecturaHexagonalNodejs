const { comparePassword } = require('src/container/support/encryption')

module.exports = (
  { models: { ScurUsrTok }, Sequelize/*sequelize, Sequelize*/ },
  {}) => {

  const create = (...args) => ScurUsrTok.create(...args)

  const update = (...args) => ScurUsrTok.update(...args)
    .then(({ dataValues }) => dataValues)
    .catch((error) => { throw new Error(error) })

  const updateLastUsedAt = (id) => {
    return ScurUsrTok.update({
      lastUsedAt: Sequelize.fn('NOW')
    }, {
      where: { id }
    })
  }

  const destroy = (...args) => ScurUsrTok.destroy(...args)

  return {
    create,
    update,
    destroy,
    updateLastUsedAt,
  }
}