const createdBy = (DataTypes)=>{
  return {
    createdByType: DataTypes.STRING,
    createdByBase: DataTypes.INTEGER,
  }
}

const updatedBy = (DataTypes)=>{
  return {
    updatedByType: DataTypes.STRING,
    updatedByBase:  DataTypes.INTEGER,
  }
}

module.exports={
  createdBy,
  updatedBy
}