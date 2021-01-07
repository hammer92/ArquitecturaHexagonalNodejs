'use strict';
const generic = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScurUsrTok', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      pKScurUsr: {
        type: Sequelize.INTEGER,
        references: { model: 'ScurUsr', key: 'id' }
      },
      origin: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      lastUsedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurUsrTok');
  }
};