'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommSet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommSet.init({
    key: DataTypes.TEXT,
    value: DataTypes.TEXT,
    pKCommMod: DataTypes.INTEGER,
    ...createdBy(DataTypes),
    ...updatedBy(DataTypes)
  }, {
    sequelize,
    tableName: 'CommSet',
    modelName: 'CommSet',
  });

  sequelizePaginate.paginate(CommSet)

  return CommSet;
};