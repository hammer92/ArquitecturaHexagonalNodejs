const t = require('tcomb')
const { compose } = require('ramda')

const Token = t.struct({
  id: t.maybe(t.String),
  userName: t.String,
  password: t.String,
  pkScurGps: t.Number,
  state: t.maybe(t.Boolean),
  config: t.maybe(t.Boolean),
  admin: t.maybe(t.Boolean),
  type: t.maybe(t.String),
  base: t.maybe(t.Number),
})

module.exports = compose(
  Token
)
