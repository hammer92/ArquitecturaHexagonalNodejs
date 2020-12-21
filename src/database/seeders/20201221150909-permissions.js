'use strict';
const glob = require("glob")

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let permissions = []
        let save = []

        glob.sync('**/modules/*/permissions.*').forEach(function (file) {
            const temp = require(`../../../${file}`)
            permissions = permissions.concat(Object.values(temp))
        });


        for (const permission of permissions) {
            const exist = await queryInterface.sequelize.query(`select count(id) from "AuthPer" where "action" = :permission`,
                {replacements: {permission}, type: Sequelize.QueryTypes.SELECT})

            if (exist[0]['count'] === "0") {
                save.push({
                    name: "Permiso " + permission,
                    description: "Describe " + permission,
                    action: permission
                })
            }
        }

        console.log(save.length, "Nuevos permisos")

        if(save.length > 0) {
            await queryInterface.bulkInsert('AuthPer', save, {});
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('AuthPer', null, {});
    }
};
