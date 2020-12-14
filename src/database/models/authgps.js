'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class AuthGps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her
      models['AuthGps'].hasMany(models['AuthUsr'],{foreignKey:'PkAuthGps'})
    }
  }
  AuthGps.init({
    Name: DataTypes.STRING,
    State: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'AuthGps',
    modelName: 'AuthGps',
  });
  return AuthGps;
};