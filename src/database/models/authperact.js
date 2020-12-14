'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthPerAct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AuthPerAct.init({
    PKAuthPer: DataTypes.INTEGER,
    State: DataTypes.BOOLEAN,
    Type: DataTypes.STRING,
    Base: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'AuthPerAct',
    modelName: 'AuthPerAct',
  });
  return AuthPerAct;
};