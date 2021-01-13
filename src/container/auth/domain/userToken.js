const t = require('tcomb')

const userToken = t.struct({
  id: t.Number,
  config: t.Boolean,
  admin: t.Boolean,
  type: t.String,
  base: t.Number
})

module.exports = userToken