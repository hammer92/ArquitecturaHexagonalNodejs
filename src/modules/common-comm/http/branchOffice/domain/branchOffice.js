const t = require('tcomb')
const { compose } = require('ramda')

const BranchOffice = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  pkCommCit: t.String,
})

module.exports = compose(
  BranchOffice
)
