'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommAre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommAre.init({
    name: DataTypes.STRING,
    ...createdBy(DataTypes),
    ...updatedBy(DataTypes)
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommAre',
    modelName: 'CommAre',
  });
  sequelizePaginate.paginate(CommAre)
  return CommAre;
};