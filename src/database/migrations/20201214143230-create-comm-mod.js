'use strict';
const genericAttributes = require('../genericAttributes')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const attribute = genericAttributes(Sequelize)

    await queryInterface.createTable('CommMod', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommMods');
  }
};