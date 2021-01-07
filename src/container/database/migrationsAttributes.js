const createdBy = (Sequelize)=>{
  return {
    createdByType: {
      type: Sequelize.STRING(20)
    },
    createdByBase: {
      type: Sequelize.INTEGER
    },
  }
}

const updatedBy = (Sequelize)=>{
  return {
    updatedByType: {
      type: Sequelize.STRING(20)
    },
    updatedByBase: {
      type: Sequelize.INTEGER
    }
  }
}

const timestamps = (Sequelize)=>{
  return {
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  }
}
module.exports={
  createdBy,
  updatedBy,
  timestamps
}