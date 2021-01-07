'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes, modelAttributes) => {
  class ScurUsr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScurUsr.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    pkScurGps: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    config: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    base: DataTypes.INTEGER,
    ...modelAttributes.createdBy(DataTypes),
    ...modelAttributes.updatedBy(DataTypes)

  }, {
    sequelize,
    tableName: 'ScurUsr',
    modelName: 'ScurUsr',
  });
  sequelizePaginate.paginate(ScurUsr)
  return ScurUsr;
};