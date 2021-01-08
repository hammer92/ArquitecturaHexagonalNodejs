'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScurPerAct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pKScurPer: {
        type: Sequelize.STRING,
        references: { model: 'ScurPer', key: 'action' }
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      type: {
        type: Sequelize.STRING
      },
      base: {
        type: Sequelize.INTEGER
      },
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    },{
      uniqueKeys: {
        actions_unique: {
          fields: ['pKScurPer', 'type', 'base']
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurPerAct');
  }
};