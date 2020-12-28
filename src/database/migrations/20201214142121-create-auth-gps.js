'use strict';
const genericAttributes = require('../genericAttributes')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const attribute = genericAttributes(Sequelize)
    await queryInterface.createTable('AuthGps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
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

    //funcion para creat procedimiento de logs
    // await queryInterface.sequelize.query('')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthGps');
  }
};