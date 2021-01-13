const t = require('tcomb')

const Login = t.struct({
  userName: t.String,
  password: t.String
})

module.exports = Login
