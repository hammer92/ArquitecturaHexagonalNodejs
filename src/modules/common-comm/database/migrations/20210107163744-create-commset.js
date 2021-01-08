'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommSet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.TEXT
      },
      value: {
        type: Sequelize.TEXT
      },
      pKCommMod: {
        type: Sequelize.INTEGER,
        references: { model: 'CommMod', key: 'id' }
      },
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommSet');
  }
};