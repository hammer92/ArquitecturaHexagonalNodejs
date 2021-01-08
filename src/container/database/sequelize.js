const Sequelize = require('sequelize')
const modelAttributes = require('./modelAttributes')
const globModule = require('src/container/utils/globModule')

module.exports = ({ config }) => {

  const sequelize = new Sequelize(
    config.database, config.username, config.password,
    { ...config.db }
  )

  const db = {
    sequelize,
    Sequelize,
    models: {}
  }

  const models = globModule('/database/models/*.js')

  Object.keys(models).forEach(modelName => {
    const model = require(models[modelName])(sequelize, Sequelize.DataTypes, modelAttributes);
    db.models[model.name] = model;
  });

  Object.keys(db.models).forEach(modelName => {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  });

  return db
}
