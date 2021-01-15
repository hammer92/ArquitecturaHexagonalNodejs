'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('CommDty', [
      { id:"RC", name: 'Registro civil de nacimiento' },
      { id:"TI", name: 'Tarjeta de identidad' },
      { id:"CC", name: 'Cédula de ciudadanía' },
      { id:"TE", name: 'Tarjeta de extranjería' },
      { id:"CE", name: 'Cédula de extranjería' },
      { id:"NT", name: 'NIT' },
      { id:"PS", name: 'Pasaporte' },
      { id:"PJ", name: 'Documento de Identificación extranjero Persona Jurídica' },
      { id:"CD", name: 'Carné Diplomático' }

    ], {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
      await queryInterface.bulkDelete('CommDty', null, {});
  }
}
