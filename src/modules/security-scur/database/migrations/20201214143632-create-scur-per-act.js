'use strict';
const genericAttributes = require('../genericAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const attribute = genericAttributes(Sequelize)

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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }, ...attribute
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