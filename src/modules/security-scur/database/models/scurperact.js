'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, modelAttributes) => {
  class ScurPerAct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScurPerAct.init({
    pKScurPer: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    base: DataTypes.INTEGER,
    ...modelAttributes.createdBy(DataTypes),
    ...modelAttributes.updatedBy(DataTypes)
  }, {
    sequelize,
    tableName: 'ScurPerAct',
    modelName: 'ScurPerAct',
  });
  sequelizePaginate.paginate(ScurPerAct)
  return ScurPerAct;
};