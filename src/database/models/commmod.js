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
  };
  CommMod.init({
    Name: DataTypes.STRING,
    Icon: DataTypes.STRING,
    State: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'CommMod',
    modelName: 'CommMod',
  });
  return CommMod;
};