'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommMod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommMod.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'CommMod',
    modelName: 'CommMod',
  });
  return CommMod;
};