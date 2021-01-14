'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommBof', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pkCommCit: {
        type: Sequelize.STRING,
        references: { model: 'CommCit', key: 'id' }
      },
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommBof');
  }
};