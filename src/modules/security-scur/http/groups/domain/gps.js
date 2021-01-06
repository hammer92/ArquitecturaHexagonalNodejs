const t = require('tcomb')
const { compose } = require('ramda')

const Group = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  createdBy: t.maybe(t.String),
  updatedBy: t.maybe(t.String),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date)
})

module.exports = compose(
  Group
)
