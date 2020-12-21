'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

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
  }
  AuthPerAct.init({
    pKAuthPer: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    base: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'AuthPerAct',
    modelName: 'AuthPerAct',
  });
  sequelizePaginate.paginate(AuthPerAct)
  return AuthPerAct;
};