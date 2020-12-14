'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommModAcc', {
      PkCommMod: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'CommMod', key: 'id' }
      },
      PKAuthPer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'AuthPer', key: 'id' }
      },
      Name: {
        type: Sequelize.STRING
      },
      Icon: {
        type: Sequelize.STRING
      },
      State: {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CommModAccs');
  }
};