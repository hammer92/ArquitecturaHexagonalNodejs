'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthUsr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthUsr.init({
    UserName: DataTypes.STRING,
    Password: DataTypes.STRING,
    PkAuthGps: DataTypes.INTEGER,
    State: DataTypes.BOOLEAN,
    Config: DataTypes.BOOLEAN,
    Admin: DataTypes.BOOLEAN,
    Type: DataTypes.STRING,
    Base: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'AuthUsr',
    modelName: 'AuthUsr',
  });

  return AuthUsr;
};