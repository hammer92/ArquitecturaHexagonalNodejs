'use strict';
const { timestamps, createdBy, updatedBy} = require('src/container/database/migrationsAttributes')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScurGps', {
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
      ...timestamps(Sequelize),
      ...createdBy(Sequelize),
      ...updatedBy(Sequelize)
    });

    //funcion para creat procedimiento de logs
    // await queryInterface.sequelize.query('')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScurGps');
  }
};