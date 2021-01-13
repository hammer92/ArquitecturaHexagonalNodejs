const Auth = require('./auth')
const Login = require('./login')
module.exports = ({
  config,
  repository: {
    security: { user: { UsrRepository, TokRepository } }
  },
  response: { Success, Fail }
}) => {
  const auth = Auth({ config, repository: { UsrRepository, TokRepository }})
  const login = Login({ config, repository: { UsrRepository, TokRepository }, response: { Success, Fail } })
  return { ...auth, login}
}