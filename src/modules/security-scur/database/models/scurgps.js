'use strict';
const {
  Model
} = require('sequelize');
// const Attributes = require('../modelsAttributes')
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, modelAttributes) => {

  // const attributes = Attributes(DataTypes)

  class ScurGps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her
      models['ScurGps'].hasMany(models['ScurUsr'],{as:'users',  foreignKey:'pkScurGps'})
    }
  }
  ScurGps.init({
    name: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    ...modelAttributes.createdBy(DataTypes),
    ...modelAttributes.updatedBy(DataTypes)
  }, {
    sequelize,
    tableName: 'ScurGps',
    modelName: 'ScurGps',
  });
  sequelizePaginate.paginate(ScurGps)
  return ScurGps;
};