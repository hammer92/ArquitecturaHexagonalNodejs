'use strict';
const { timestamps } = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScurPer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING,
        unique: true,
      },
      ...timestamps(Sequelize)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurPer');
  }
};