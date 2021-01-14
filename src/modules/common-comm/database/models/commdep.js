'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommDep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['CommDep'].hasMany(models['CommCit'],{as:'city',  foreignKey:'pkCommDep'})

    }
  }
  CommDep.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommDep',
    modelName: 'CommDep',
  });
  sequelizePaginate.paginate(CommDep)
  return CommDep;
};