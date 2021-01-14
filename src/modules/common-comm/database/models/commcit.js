'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommCit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['CommCit'].hasMany(models['CommBof'],{as: 'branch_office',  foreignKey:'pkCommCit'})
      models['CommCit'].belongsTo(models['CommDep'],{as:'department',  foreignKey:"id", targetKey:'pkCommDep'})

    }
  }
  CommCit.init({
    name: DataTypes.STRING,
    pkCommDep: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommCit',
    modelName: 'CommCit',
  });
  sequelizePaginate.paginate(CommCit)
  return CommCit;
};