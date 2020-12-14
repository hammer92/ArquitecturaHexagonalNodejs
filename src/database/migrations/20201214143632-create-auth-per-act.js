'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AuthPerAct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PKAuthPer: {
        type: Sequelize.INTEGER,
        references: { model: 'AuthPer', key: 'id' }
      },
      State: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      Type: {
        type: Sequelize.STRING
      },
      Base: {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthPerActs');
  }
};