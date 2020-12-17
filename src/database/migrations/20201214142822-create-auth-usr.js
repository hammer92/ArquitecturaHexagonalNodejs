'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AuthUsr', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING,
        unique: true
      },
      Password: {
        type: Sequelize.STRING
      },
      PkAuthGps: {
        type: Sequelize.INTEGER,
        references: { model: 'AuthGps', key: 'id' }
      },
      State: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      Config: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('AuthUsrs');
  }
};