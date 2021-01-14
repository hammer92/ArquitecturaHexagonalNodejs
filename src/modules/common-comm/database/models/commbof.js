'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommBof extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models['CommBof'].belongsTo(models['CommCit'],{as:'city',  foreignKey:"id", targetKey:'pkCommCit'})

    }
  }
  CommBof.init({
    name: DataTypes.STRING,
    pkCommCit: DataTypes.INTEGER,
    ...createdBy(DataTypes),
    ...updatedBy(DataTypes)
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommBof',
    modelName: 'CommBof',
  });
  sequelizePaginate.paginate(CommBof)
  return CommBof;
};