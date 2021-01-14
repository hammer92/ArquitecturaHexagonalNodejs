'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes, { createdBy, updatedBy }) => {
  class CommDty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommDty.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    tableName: 'CommDty',
    modelName: 'CommDty',
  });
  sequelizePaginate.paginate(CommDty)
  return CommDty;
};