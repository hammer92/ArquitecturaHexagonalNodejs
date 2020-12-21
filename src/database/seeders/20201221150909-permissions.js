'use strict';

const glob = require("glob");
module.exports = {
    up: async (queryInterface, Sequelize) => {

        /**
         * Add seed commands here.
         *
         * Example:
         *
         */
        let permissions = []
        let save = []

        glob.sync( '**/modules/*/permissions.*' ).forEach( function( file ) {
            const temp = require(`../../../${file}`)
            permissions = permissions.concat(Object.values(temp))
        });


        for (const permission of permissions) {
            const exist = await queryInterface.sequelize.query(`select count(id) from "AuthPer" where "Action" = :permission `,
                {replacements: { permission }, type: Sequelize.QueryTypes.SELECT})

            if(exist[0]['count'] === "0"){
                save.push({
                    Name: "Permiso "+permission,
                    Description: "Describe",
                    Action: permission
                })
            }
        }

        await queryInterface.bulkInsert('AuthPer', save, {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         */
        await queryInterface.bulkDelete('AuthPer', null, {});
    }
};
