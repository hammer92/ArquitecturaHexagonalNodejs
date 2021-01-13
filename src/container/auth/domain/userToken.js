const t = require('tcomb')

const userToken = t.struct({
  id: t.Number,
  config: t.Boolean,
  admin: t.Boolean,
  type: t.maybe(t.String),
  base: t.maybe(t.Number)
})

module.exports = userToken