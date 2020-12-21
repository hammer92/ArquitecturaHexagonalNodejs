'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  class AuthPer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthPer.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    action: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'AuthPer',
    modelName: 'AuthPer',
  });
  sequelizePaginate.paginate(AuthPer)
  return AuthPer;
};