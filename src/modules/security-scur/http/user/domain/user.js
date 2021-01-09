const t = require('tcomb')
const { compose } = require('ramda')
const { updatedBy, createdBy, timestamps } = require('src/container/http/domain/attributesBy')

const User = t.struct({
  id: t.maybe(t.String),
  userName: t.String,
  password: t.String,
  pkScurGps: t.Number,
  state: t.maybe(t.Boolean),
  config: t.maybe(t.Boolean),
  admin: t.maybe(t.Boolean),
  type: t.maybe(t.String),
  base: t.maybe(t.Number),
  ...timestamps(t),
  ...updatedBy(t),
  ...createdBy(t)
})

module.exports = compose(
  User
)
