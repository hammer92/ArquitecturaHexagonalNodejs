'use strict'
const {
  Model
} = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommMen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models['CommMen'].hasMany(models['CommMen'], { as: 'menu', foreignKey: 'pKCommMen' })
      models['CommMen'].belongsTo(models['ScurPerAct'],
        { as: 'permiso', foreignKey: 'pKScurPer',targetKey:'pKScurPer' })
    }
  }

  CommMen.init({
    icon: DataTypes.TEXT,
    name: DataTypes.TEXT,
    pKCommMen: DataTypes.TEXT,
    pKScurPer: DataTypes.TEXT,
    ...createdBy(DataTypes),
    ...updatedBy(DataTypes)
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommMen',
    modelName: 'CommMen',
  })

  sequelizePaginate.paginate(CommMen)

  return CommMen
}