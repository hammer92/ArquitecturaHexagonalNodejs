'use strict';
const genericAttributes = require('../genericAttributes')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const attribute = genericAttributes(Sequelize)
    await queryInterface.createTable('ScurUsr', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      pkScurGps: {
        type: Sequelize.INTEGER,
        references: { model: 'ScurGps', key: 'id' }
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      config: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'ScurUsr'
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurUsr');
  }
};