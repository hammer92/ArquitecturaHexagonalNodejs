'use strict'
const {
  Model
} = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommMod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }

  CommMod.init({
    icon: DataTypes.TEXT,
    name: DataTypes.TEXT,
    pKCommMod: DataTypes.TEXT,
    pKScurPer: DataTypes.TEXT,
    ...createdBy(DataTypes),
    ...updatedBy(DataTypes)
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommMod',
    modelName: 'CommMod',
  })

  sequelizePaginate.paginate(CommMod)

  return CommMod
}