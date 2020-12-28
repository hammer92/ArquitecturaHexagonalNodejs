module.exports = (Sequelize) => {
    return {
        createdType: {
            type: Sequelize.STRING
        },
        createdBase: {
            type: Sequelize.INTEGER
        },
        updatedType: {
            type: Sequelize.STRING
        },
        updatedBase: {
            type: Sequelize.INTEGER
        },
    }
}