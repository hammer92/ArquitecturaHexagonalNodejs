'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
     await queryInterface.bulkInsert('CommDep', [
       { id: "05", name:"Antioquia"},
       { id: "08", name:"Atlántico"},
       { id: "11", name:"Bogotá, D.C."},
       { id: "13", name:"Bolívar"},
       { id: "15", name:"Boyacá"},
       { id: "17", name:"Caldas"},
       { id: "18", name:"Caquetá"},
       { id: "19", name:"Cauca"},
       { id: "20", name:"Cesar"},
       { id: "23", name:"Córdoba"},
       { id: "25", name:"Cundinamarca"},
       { id: "27", name:"Chocó"},
       { id: "41", name:"Huila"},
       { id: "44", name:"La Guajira"},
       { id: "47", name:"Magdalena"},
       { id: "50", name:"Meta"},
       { id: "52", name:"Nariño"},
       { id: "54", name:"Norte de Santander"},
       { id: "63", name:"Quindio"},
       { id: "66", name:"Risaralda"},
       { id: "68", name:"Santander"},
       { id: "70", name:"Sucre"},
       { id: "73", name:"Tolima"},
       { id: "76", name:"Valle del Cauca"},
       { id: "81", name:"Arauca"},
       { id: "85", name:"Casanare"},
       { id: "86", name:"Putumayo"},
       { id: "88", name:"Archipiélago de San Andrés"},
       { id: "91", name:"Amazonas"},
       { id: "94", name:"Guainía"},
       { id: "95", name:"Guaviare"},
       { id: "97", name:"Vaupés"},
       { id: "99", name:"Vichada"}
     ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('CommDep', null, {});
  }
};
