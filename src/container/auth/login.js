const Login = require('./domain/login')
const Status = require('http-status')
const uuid = require('uuid')

const jwt = require('./jwt')
const validate = ({ config, body, UsrRepository, TokRepository }) => {
  const { signin } = jwt({ config })
  const signIn = signin()

  return new Promise(async (resolve, reject) => {
    try {
      const credentials = Login(body)
      const userCredentials = await UsrRepository.findOne({
        attributes: [
          'id', 'userName', 'password', 'config', 'admin', 'type', 'base'
        ],
        where: {
          userName: credentials.userName,
          state: true
        }
      })

      const validatePass = UsrRepository.validatePassword(userCredentials.password)

      if (!validatePass(credentials.password)) {
        throw new Error('Invalid Credentials')
      }

      const tokenCredentials = await TokRepository.create({ id: uuid.v4(), origin: '', pKScurUsr: userCredentials.id })

      const token = signIn({
        id: userCredentials.id,
        config: userCredentials.config,
        admin: userCredentials.admin,
        type: userCredentials.type,
        base: userCredentials.base,
        token: tokenCredentials.id
      })

      tokenCredentials.token = token

      await tokenCredentials.save()

      resolve({
        token
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = ({ config, repository: { UsrRepository, TokRepository }, response: { Success, Fail } }) => {
  return (req, res, next) => {

    validate({ body: req.body, UsrRepository, TokRepository, config })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}