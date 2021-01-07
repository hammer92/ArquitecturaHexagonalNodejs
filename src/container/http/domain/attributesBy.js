const createdBy = (t)=>{
  return {
    createdByType: t.maybe(t.String),
    createdByBase: t.maybe(t.Number),
  }
}

const updatedBy = (t)=>{
  return {
    updatedByType: t.maybe(t.String),
    updatedByBase:  t.maybe(t.Number),
  }
}
const timestamps = (t)=>{
  return {
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date),
  }
}

module.exports={
  createdBy,
  updatedBy,
  timestamps
}