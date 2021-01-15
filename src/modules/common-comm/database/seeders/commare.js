'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
    */
    await queryInterface.bulkInsert('CommAre', [
      { name: 'Administrativa' },
      { name: 'Compras' },
      { name: 'Contabilidad' },
      { name: 'Control Interno' },
      { name: 'Digitaciòn' },
      { name: 'Farmacia' },
      { name: 'Gerencia' },
      { name: 'Facturas' },
      { name: 'Sistemas' },
      { name: 'Ventas' }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('CommAre', null, {});
  }
};
