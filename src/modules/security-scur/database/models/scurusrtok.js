'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScurUsrTok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScurUsrTok.init({
    origin: DataTypes.STRING,
    pKScurUsr: DataTypes.INTEGER,
    token: DataTypes.STRING,
    lastUsedAt: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    tableName: 'ScurUsrTok',
    modelName: 'ScurUsrTok',
  });
  return ScurUsrTok;
};