'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommMen', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      icon: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING(50)
      },
      pKCommMen: {
        type: Sequelize.INTEGER,
        references: { model: 'CommMen', key: 'id' }
      },
      pKScurPer: {
        type: Sequelize.STRING,
        references: { model: 'ScurPer', key: 'action' }
      },
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommMen');
  }
};