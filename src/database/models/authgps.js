'use strict';
const {
  Model
} = require('sequelize');
const Attributes = require('../modelsAttributes')
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {

  const attributes = Attributes(DataTypes)

  class AuthGps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her
      models['AuthGps'].hasMany(models['AuthUsr'],{as:'users',  foreignKey:'pkAuthGps'})
    }
  }
  AuthGps.init({
    name: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    ...attributes
  }, {
    sequelize,
    tableName: 'AuthGps',
    modelName: 'AuthGps',
  });
  sequelizePaginate.paginate(AuthGps)
  return AuthGps;
};