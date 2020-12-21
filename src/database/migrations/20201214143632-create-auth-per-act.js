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
      }
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