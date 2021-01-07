'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  class ScurPer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScurPer.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    action: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    tableName: 'ScurPer',
    modelName: 'ScurPer',
  });
  sequelizePaginate.paginate(ScurPer)
  return ScurPer;
};