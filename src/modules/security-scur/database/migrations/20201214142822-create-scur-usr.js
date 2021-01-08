'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScurUsr', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      pkScurGps: {
        type: Sequelize.INTEGER,
        references: { model: 'ScurGps', key: 'id' }
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      config: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'ScurUsr'
      },
      base: {
        type: Sequelize.INTEGER
      },
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurUsr');
  }
};