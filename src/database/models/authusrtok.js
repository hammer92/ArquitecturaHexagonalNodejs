'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthUsrTok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthUsrTok.init({
    Origin: DataTypes.STRING,
    PKAuthUsr: DataTypes.INTEGER,
    Token: DataTypes.STRING,
    LastUsedAt: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'AuthUsrTok',
    modelName: 'AuthUsrTok',
  });
  return AuthUsrTok;
};