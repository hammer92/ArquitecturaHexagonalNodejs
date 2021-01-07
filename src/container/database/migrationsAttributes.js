const createdBy = (Sequelize)=>{
  return {
    createdByType: {
      type: Sequelize.STRING
    },
    createdByBase: {
      type: Sequelize.INTEGER
    },
  }
}

const updatedBy = (Sequelize)=>{
  return {
    updatedByType: {
      type: Sequelize.STRING
    },
    updatedByBase: {
      type: Sequelize.INTEGER
    },
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
  }
}
module.exports={
  createdBy,
  updatedBy,
  timestamps
}