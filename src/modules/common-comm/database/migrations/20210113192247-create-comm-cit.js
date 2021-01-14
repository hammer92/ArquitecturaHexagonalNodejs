'use strict';
const { timestamps} = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommCit', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      pkCommDep: {
        type: Sequelize.STRING,
        references: { model: 'CommDep', key: 'id' }
      },
      ...timestamps(Sequelize),
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommCit');
  }
};