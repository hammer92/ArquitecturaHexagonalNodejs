'use strict';
const genericAttributes = require('../genericAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const attribute = genericAttributes(Sequelize)

    await queryInterface.createTable('AuthPerAct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pKAuthPer: {
        type: Sequelize.STRING,
        references: { model: 'AuthPer', key: 'action' }
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
          fields: ['pKAuthPer', 'type', 'base']
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthPerActs');
  }
};